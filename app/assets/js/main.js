let navList = document.querySelector('.main-list');
document.querySelector('.burger-nav').addEventListener('click', function() {
  navList.classList.toggle('main-list_mobile');
});

window.addEventListener('resize', function() {
  if (this.screen.width > 480) {
    navList.classList.remove('main-list_mobile');
  }
});
