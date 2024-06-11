var headerSP = document.querySelector('.js-header-sp');
var headerSpArw = document.querySelectorAll('.js-header-sp-arw');
var headerToggleMenu = document.querySelectorAll('.js-toggle-menu');

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
