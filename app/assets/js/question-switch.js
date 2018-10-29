function TestSlider(questions) {
  const questionContainer = document.querySelector('.test-nav');
  const counter = document.querySelector('.questions__counter');
  const image = document.querySelector('.questions__image');
  const answerButton = document.getElementById('answer-button');
  const checkboxes = document.getElementsByClassName('answers__choice');
  const radioContainer = document.querySelector('.answers');
  let questionCounter = 1;

  let numberOfRightAnswers = 0;
  let answers = [];


  this.goToQuestionAtId = id => {
    if (id > questions.length) {
      id = 1;
    }
    questionCounter = id;
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
      if(answerButton.disabled) {
        return;
      }
      e.preventDefault();
      const radioAnswers = Array.from(radioContainer.children );
      console.log(radioAnswers);

      questionCounter++;
      this.clearBoxes();
      this.goToQuestionAtId(questionCounter);
      answerButton.disabled = true;
    });

    radioContainer.addEventListener('click', e => {
      this.activateAnswerButton('answer-button');
    });
  };

  this.hideAnswerButton = (box) => {
    document.getElementById(box).style.visibility = 'hidden';
  }

  this.activateAnswerButton = box => {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        document.getElementById(box).disabled = false;
        // document.getElementById(box).classList.remove = 'passive';
        // document.getElementById(box).classList.add = 'active';
        break;
      }
    }
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
