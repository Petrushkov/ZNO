function TestSlider(questions) {
  const questionContainer = document.querySelector('.test-nav');
  const counter = document.querySelector('.questions__counter');
  const image = document.querySelector('.questions__image');
  const answerButton = document.getElementById('answer-button');
  const checkboxes = document.getElementsByClassName('answers__choice');
  const radioAnswers = document.querySelector('.answers');
  let questionCounter = 1;

  this.goToQuestionAtId = id => {
    counter.innerText = `Вопрос ${id} из ${questions.length}`;
    image.setAttribute('src', `./assets/images/q-${id}.png`);
  };

  this.plusQuestion = () => {
    this.goToQuestionAtId(questionCounter);
  };

  this.initializeListeners = () => {
    questionContainer.addEventListener('click', e => {
      e.preventDefault();
      this.goToQuestionAtId(e.target.id);
    });

    window.addEventListener('load', () => {
      counter.innerText = `Вопрос 1 из ${questions.length}`;
    });

    answerButton.addEventListener('click', e => {
      e.preventDefault();
      questionCounter++;
      this.clearBoxes();
      this.goToQuestionAtId(questionCounter);
    });

    radioAnswers.addEventListener('click', e => {
      this.showMe('answer-button');
    });
  };

  this.showMe = box => {
    let vis = 'hidden';
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        vis = 'visible';
        break;
      }
    }
    document.getElementById(box).style.visibility = vis;
  };

  this.clearBoxes = () => {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkboxes[i].checked = false;
        break;
      }
    }
  };
}
