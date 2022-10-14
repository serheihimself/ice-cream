let swiper = new Swiper('.mySwiper1', {
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
    },

  effect:'fade',

  fadeEffect:{
    crossFade:true,
  },

  autoplay:{
    delay:4000,
    speed:4000,
    disableOnInteraction:false,
    },

  keyboard:{
    onlyInViewport:true,
    pageUpDown:true,
    },
    
  mousewheel:{
    sensitivity:1,
  },  

});
