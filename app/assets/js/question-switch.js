const questions = Array.from(document.getElementsByClassName('test-nav__link'));
const counter = document.querySelector('.questions__counter');
const image = document.querySelector('.questions__image');
const answerButton = document.getElementById('answer-button');

let questionCounter = 1;

const goToNextQuestion = (id) => {
    counter.innerText = `Вопрос ${id} из ${questions.length}`;
    image.setAttribute('src', `../images/q-${id}.png`);
}

questions.forEach( el => el.addEventListener('click', (e) => {
    e.preventDefault();
    goToNextQuestion(e.target.id);
}));

window.addEventListener('load', () => {
    counter.innerText = `Вопрос 1 из ${questions.length}`;
});

answerButton.addEventListener('click', (e) => {
    e.preventDefault();
    questionCounter++;
    goToNextQuestion(questionCounter);
});