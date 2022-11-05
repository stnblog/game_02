/**
	viewport

*********************************************************************************/

/** loading
*********************************************************************************/
var loadeditems = '#contents img,#imageloaded i,#imageloaded img';
  $(loadeditems).imagesLoaded({ background: true }).always(function(){
        //imagescomp();
  })
	.done(function(){
        imagescomp();
    })
	.fail(function(){
        imagescomp();
    });
    function imagescomp (){
      $('html,body').addClass('imgloaded');
      loadedcheck();
    }
    $(window).on('load',function(){
        $('html,body').addClass('webloaded');
    });

    function loadedcheck(){
       var  outtime = 1.0;

  if( getUrlVars()['goto'] ){
    $to = $('.' + getUrlVars()['goto']).offset().top ;
    if($('.siteheader')[0]){
      if($('#baseVW').width()>1023){
        off = 0;
      }else{
        off = $('.menu_control').outerHeight() / 3;
      }
		}
    setTimeout(function(){
      $('html,body').stop().animate({scrollTop:$to-off},{duration:1200,easing:'easeOutQuart',complete:function(){
        history.replaceState(null,null,'./');
      }});
    },500);
  }

         //setTimeout(function(){
         $('#loader').addClass('out').stop().animate({opacity:0},{duration:outtime*1200,easing:'easeOutQuart',complete:function(){
             $('html,body').addClass('windowloaded');
             $('#loader').remove();
             setTimeout(lazy,200);
             setTimeout(getscroll,0);
         }});
      setTimeout(function(){
     gsap.registerPlugin(ScrollTrigger);
    const scrollAnimationTarget2 = document.querySelectorAll('[data-trigger],[data-anim]'); //Nodelist
    const scrollAnimationTargetArr2 = Array.prototype.slice.call(scrollAnimationTarget2); //Array
    scrollAnimationTargetArr2.forEach(function(el2) {
    var start = 'top 90%';
    if($('#baseVW').width()>1023){start = 'top 80%';}
    gsap.to(el2, {
    scrollTrigger: {
      markers: false,
      trigger: el2, start: start, end: "bottom top",toggleClass: "is-anim",once:true,
      toggleActions: "restart none none none", // 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繧､繝吶Φ繝医〒逋ｺ轣ｫ縺吶ｋ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ遞ｮ
    },
    });
    });
    },outtime * 1000 - 500 );

    }

    function lazy(){
    var imgsize = $("img").length;
        for(var i=0; imgsize>i; i++){
            if($('img').eq(i).attr('src')==='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' ){
                $('img').eq(i).attr('src',$('img').eq(i).attr('data-src')).addClass('lazyimgload');
            }
        }
    }
    