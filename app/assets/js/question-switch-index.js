const pageId = window.location.pathname.replace(/\D/g, '');
var testSlider = new TestSlider(tests[pageId].questions, tests[pageId].id );
testSlider.initializeListeners();

// document.querySelector('.js-questions-submit').addEventListener('click', function() {
//   testSlider.plusQuestion();
// });

// document.getElementById('slide-1').style.backgroundImage = 'url("img-1.jpg")';
