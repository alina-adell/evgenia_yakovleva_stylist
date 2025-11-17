document.addEventListener("DOMContentLoaded", function () {
  // Улучшенное бургер-меню
  const burgerBtn = document.querySelector(".burger-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu__link");

  if (burgerBtn && mobileMenu) {
    let isMenuOpen = false; // Дополнительная переменная для отслеживания состояния

    // Функция для открытия меню
    function openMenu() {
      isMenuOpen = true;
      mobileMenu.style.display = "block";
      setTimeout(() => {
        mobileMenu.classList.add("show");
      }, 10);
      burgerBtn.classList.add("active");
      document.body.style.overflow = "hidden"; // Блокируем прокрутку
    }

    // Функция для закрытия меню
    function closeMenu() {
      isMenuOpen = false;
      mobileMenu.classList.remove("show");
      burgerBtn.classList.remove("active");
      document.body.style.overflow = ""; // Возвращаем прокрутку

      setTimeout(() => {
        mobileMenu.style.display = "none";
      }, 300); // Задержка для анимации
    }

    // Обработчик клика по бургер-кнопке
    burgerBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      console.log("Burger clicked, isMenuOpen:", isMenuOpen); // Для отладки

      if (isMenuOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Дополнительный обработчик для кликов по всей области бургер-кнопки
    burgerBtn.addEventListener("touchstart", function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (isMenuOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Закрытие при клике на ссылки меню
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        closeMenu();
      });
    });

    // Закрытие при клике вне меню (на overlay)
    mobileMenu.addEventListener("click", function (e) {
      if (e.target === mobileMenu) {
        closeMenu();
      }
    });

    // Закрытие по клавише Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    });
  }
});

// Инициализация Slick каруселей
$(document).ready(function () {
  // Карусель отзывов
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
    fade: true,
    cssEase: "linear",
    speed: 800,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          dots: true,
          fade: true,
          autoplay: true,
        },
      },
    ],
  });
});
