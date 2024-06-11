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
