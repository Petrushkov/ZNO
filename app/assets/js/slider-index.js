var slider1 = new Slider('js-slide-1');
slider1.showSlides();

document.querySelector('.js-prev-1').addEventListener('click', function() {
  slider1.plusSlides(-1);
});

document.querySelector('.js-next-1').addEventListener('click', function() {
  slider1.plusSlides(1);
});

// document.getElementById('slide-1').style.backgroundImage = 'url("img-1.jpg")';
