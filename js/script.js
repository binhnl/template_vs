var headerSP = document.querySelector('.js-header-sp');
var headerSpArw = document.querySelectorAll('.js-header-sp-arw');
var headerToggleMenu = document.querySelectorAll('.js-toggle-menu');
var factsNumber = document.querySelectorAll('.js-counter');
var outsourceAccordion = document.querySelectorAll('.js-outsource-toggle');

headerSpArw.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    var parentHeaderSP = item.parentElement;
    parentHeaderSP.classList.toggle('Header-sp-arw--show');
  });
});

headerToggleMenu.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    headerSP.classList.toggle('Header--is-open');
  });
});

function countUp(element, target, duration) {
  let start = 0;
  let end = target;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / (end - start)));

  let timer = setInterval(function () {
    start += increment;
    element.textContent = start < 10 ? '0' + start : start;
    if (start === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

document.addEventListener('DOMContentLoaded', (event) => {
  factsNumber.forEach(function (item) {
    let target = parseInt(item.getAttribute('data-target'));
    let duration = 5000;

    countUp(item, target, duration);
  });
});

outsourceAccordion.forEach((accordion) => {
  accordion.addEventListener('click', function () {
    this.parentElement.classList.toggle('Accordion--is-open');
    outsourceAccordion.forEach((currentAccordion) => {
      if (currentAccordion.parentElement !== this.parentElement) {
        currentAccordion.parentElement.classList.remove('Accordion--is-open');
      }
    });
  });
});

jQuery(document).ready(function ($) {
  $('.js-slick-feedback').slick({
    dots: true,
    arrows: false,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    pauseOnHover: false,
    pauseOnFocus: false
  });

  $('.js-slick-teams').slick({
    dots: true,
    arrows: false,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
});
