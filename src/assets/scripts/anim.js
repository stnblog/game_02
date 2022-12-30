gsap.registerPlugin(ScrollTrigger);

function setScrollText(){

  gsap.to('#heading1', {
    scrollTrigger: {
      trigger: '#heading1',
      toggleActions: 'play reverse play reverse',
      start: '0s',
      end: '+=500s',
    },
    opacity: 1,
  });

  gsap.to('#heading2', {
    scrollTrigger: {
      trigger: '#heading2',
      toggleActions: 'play reverse play reverse',
      start: '+=500s',
      end: '+=500s',
    },
    opacity: 1,
  });

  gsap.to('#heading3', {
    scrollTrigger: {
      trigger: '#heading3',
      toggleActions: 'play reverse play reverse',
      start: '+=1000s',
      end: '+=3000s',
    },
    opacity: 1,
  });

  // gsap.to('#heading4', {
  //   scrollTrigger: {
  //     trigger: '#heading4',
  //     toggleActions: 'play reverse play reverse',
  //     start: '+=3000s',
  //     end: '+=1000s',
  //   },
  //   opacity: 1,
  // });


  // gsap.to('#heading5', {
  //   scrollTrigger: {
  //     trigger: '#heading5',
  //     toggleActions: 'play reverse play reverse',
  //     start: '+=4000s',
  //     end: '+=1000s',
  //   },
  //   opacity: 1,
  // });

}



gsap.to('.p-about__wrap', {
  scrollTrigger: {
    pin: '.p-about__wrap',
    end: '+=1200s',
    pinSpacing: true,
  },
});


setScrollText();
setScrollImages();