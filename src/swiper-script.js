let swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },

  autoplay:{
    delay:4000,
    speed:4000,
    },

  
  effect: 'flip',
    flipEffect:{
    slideShadows:true,
    limitRotation:true,},  

});
