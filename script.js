// ハンバーガー
jQuery("#js-humberger__button").on("click", function (e) {
  e.preventDefault();
  jQuery(this).toggleClass("is-checked");
  jQuery("#js-drawer").slideToggle();
  if (jQuery("body").css("overflow") === "hidden") {
    jQuery("body").css({ height: "", overflow: "" });
  } else {
    jQuery("body").css({ height: "100%", overflow: "hidden" });
  }
});

// ページ内リンクドロワー開閉
jQuery("#js-drawer a[href^='#']").on("click", function () {
  jQuery("#js-humberger__button").toggleClass("is-checked");
  jQuery("#js-drawer").slideToggle();
  if (jQuery("body").css("overflow") === "hidden") {
    jQuery("body").css({ height: "", overflow: "" });
  } else {
    jQuery("body").css({ height: "100%", overflow: "hidden" });
  }
});

// swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 33,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// accordion
jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();
  if (jQuery(this).parent().hasClass("is-open")) {
    jQuery(this).parent().removeClass("is-open");
    jQuery(this).next().slideUp();
  } else {
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
  }
});
