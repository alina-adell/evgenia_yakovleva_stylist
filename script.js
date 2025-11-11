document.addEventListener("DOMContentLoaded", function () {
  // Инициализация бургер-меню
  const burgerBtn = document.querySelector(".burger-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu__link");

  burgerBtn?.addEventListener("click", function () {
    this.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      burgerBtn.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });
});

// Инициализация Slick карусели
$(document).ready(function () {
  $(".reviews-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    speed: 500,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  });

  // Карусель работ
  $(".work__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    fade: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
          fade: false,
          swipeToSlide: true,
          touchMove: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          dots: true,
          fade: false,
          swipeToSlide: true,
          touchMove: true,
          swipe: true,
        },
      },
    ],
  });
});
