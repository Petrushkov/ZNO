function Slider(elementClass) {
  this.slides = document.getElementsByClassName(elementClass);
  this.slideIndex = 1;

  this.plusSlides = function(n) {
    this.showSlides((this.slideIndex += n));
  };

  this.currentSlide = function(n) {
    showSlides((this.slideIndex = n));
  };

  this.showSlides = function(n) {
    var i;
    for (i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = 'none';
    }

    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    // slides[i].style.backgroundImage = 'url(`img-${this.slideIndex}`)';

    this.slides[this.slideIndex - 1].style.display = 'block';
  };
}
