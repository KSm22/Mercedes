let threed = document.querySelector('.modal-threed');

let threedButton = document.querySelector('.three-d__btn');

let threedButtonClose = document.querySelector('.modal-threed-close');


threedButton.onclick = function() {
  threed.classList.add('modal-threed--active');
};

threedButtonClose.onclick = function() {
  threed.classList.remove('modal-threed--active');
};