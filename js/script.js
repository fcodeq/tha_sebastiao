/* Habilita popup "Saiba mais" na seção de Especialidades */
const closeBtns = document.querySelectorAll(".close-dialog");
closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.parentElement.close();
  });
});
for (let idx=1; idx<20; idx++) {
  /* Não é razoável ter 20 ou mais especialidades. Portanto este loop
   * é intencionalmente pequeno. */
  let key = "esp" + idx;
  let btn = document.getElementById(key + "-btn");
  let dialog = document.getElementById(key + "-dialog");
  if (btn === null || dialog === null) {
    /* Poderiamos quebrar o loop aqui, mas preferi prosseguir para ter mais
     * robustez a numerações não sequenciais (ex: elemento removido).
     */
    continue;
  }
  btn.addEventListener("click", () => {
    dialog.showModal();
  });
}

/* Habilita fotos dinâmicas na seção do Herói */
var swiperHero = new Swiper("#hero-carousel", {
  effect: "fade",
  loop: true,
  spaceBetween: 10,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

/* Habilita depoimentos dinâmicos */
const swiperTestimonial = new Swiper("#depoimentos-carousel", {
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    touchStart: () => swiperTestimonial.autoplay.stop(),
    touchEnd: () => swiperTestimonial.autoplay.start(),
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});

/* Habilita fotos dinâmicas na galeria */
var swiperThumb = new Swiper("#fotos-thumb-carousel", {
  freeMode: true,
  grabCursor: true,
  slidesPerView: 6,
  spaceBetween: 10,
  watchSlidesProgress: true,
});
var swiperPhoto = new Swiper("#fotos-carousel", {
  effect: "fade",
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    touchStart: () => swiperPhoto.autoplay.stop(),
    touchEnd: () => swiperPhoto.autoplay.start(),
  },
  thumbs: {
    swiper: swiperThumb,
  },
});

