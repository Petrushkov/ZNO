function TestSlider(questions, pageId) {
  const questionContainer = document.querySelector('.test-nav');
  const counter = document.querySelector('.questions__counter');
  const image = document.querySelector('.questions__image');
  const answerButton = document.getElementById('answer-button');
  const checkboxes = document.getElementsByClassName('answers__choice');
  const radioContainer = document.querySelector('.answers');
  const multipleRadioContainer = document.querySelector('.answers-multiple');
  const finishTestButton = document.getElementById('finish-test');
  let questionCounter = 0;

  let numberOfRightAnswers = 0;
  let answers = [];

  this.addChecked = id => {
    let isCheckedAlredy = false;
    let checkedBox = 0;
    answers.forEach(el => {
      if (el.id == id) {
        isCheckedAlredy = true;
        checkedBox = el.answer;
      }
    });

    if (isCheckedAlredy) {
      setTimeout(function() {
        checkboxes[checkedBox].checked = true;
      }, 200);
    }
  };

  this.goToQuestionAtId = id => {
    if (id >= questions.length) {
      id = 0;
    }
    questionCounter = id;
    if(questionCounter >= 20 && questionCounter <= 23) {
      radioContainer.style.display = 'none';
      multipleRadioContainer.style.display = 'block';
    } else {
      radioContainer.style.display = 'block';
      multipleRadioContainer.style.display = 'none';
    }
    this.addChecked(id);
    counter.innerText = `Вопрос ${+id + 1} из ${questions.length}`;
    image.setAttribute('src', `./assets/images/${pageId}/q-${id}.png`);
  };

  this.plusQuestion = () => {
    this.goToQuestionAtId(++questionCounter);
  };

  this.findItemIndex = id => {
    let indexFound = -1;
    answers.forEach((el, index) => {
      if (el.id === +id) {
        indexFound = index;
      }
    });

    return indexFound;
  };


  this.initializeListeners = () => {
    questionContainer.addEventListener('click', e => {
      e.preventDefault();
      this.goToQuestionAtId(e.target.id);

      this.clearBoxes();
    });

    window.addEventListener('load', () => {
      counter.innerText = `Вопрос 1 из ${questions.length}`;
    });

    answerButton.addEventListener('click', e => {
      if (answerButton.disabled) {
        return;
      }
      e.preventDefault();
      [].forEach.call(checkboxes, (el, index) => {
        if (el.checked) {
          let checkedIndex = this.findItemIndex(questionCounter);
          if (checkedIndex !== -1) {
            answers[checkedIndex] = {
              id: +questionCounter,
              answer: index,
            };
          } else {
            answers.push({
              id: +questionCounter,
              answer: index,
            });
          }
        }
      });

      questionCounter++;
      this.goToQuestionAtId(questionCounter);
      this.clearBoxes();
      answerButton.disabled = true;

    });

    radioContainer.addEventListener('click', e => {
      this.activateAnswerButton('answer-button');
    });

    finishTestButton.addEventListener('click', e => {
      answers.forEach(el => {
        if (el.answer === questions[el.id].rightAnswer) {
          numberOfRightAnswers++;
        }
      });

      document.querySelector(
        '.hero-container__heading',
      ).innerText = `Кількість правильних відповідей: ${numberOfRightAnswers}`;
    });
  };

  this.hideAnswerButton = box => {
    document.getElementById(box).style.visibility = 'hidden';
  };

  this.activateAnswerButton = box => {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        document.getElementById(box).disabled = false;
        document.getElementById(box).classList.remove('questions__answer_passsive');
        document.getElementById(box).classList.add('questions__answer_active');
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
