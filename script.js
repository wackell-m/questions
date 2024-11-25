const questions = [
  {
    text: "How many purple ornaments are on the tree?",
    answer: ["five", "5"],
    error: "Hmm, maybe you're looking at the wrong tree? There must be one printed somewhere..."
  },
  {
    text: "How many candies are on the polls?",
    answer: ["twenty one", "21", "twenty-one"],
    error: "Look for overlaps between them!"
  },
  {
    text: "How many piles of snow are on the tree?",
    answer: ["seven", "7"],
    error: "Hmm, maybe you're looking at the wrong tree? There must be one printed somewhere...hey, wait a minute, you had this hint already!"
  }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById('question');
const inputElement = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');
const errorElement = document.getElementById('error-message');
const finalMessageElement = document.getElementById('final-message');

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.text;
  inputElement.value = '';
  errorElement.style.visibility = 'hidden';
}

function checkAnswer() {
  const userAnswer = inputElement.value.toLowerCase().trim();
  const correctAnswers = questions[currentQuestionIndex].answer;
  
  if (correctAnswers.includes(userAnswer)) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      showFinalMessage();
    }
  } else {
    showErrorMessage(questions[currentQuestionIndex].error);
  }
}

function showErrorMessage(message) {
  errorElement.textContent = message;
  errorElement.style.visibility = 'visible';
  setTimeout(() => {
    errorElement.style.visibility = 'hidden';
  }, 3000);
}

function showFinalMessage() {
  questionElement.style.visibility = 'hidden';
  inputElement.style.visibility = 'hidden';
  submitButton.style.visibility = 'hidden';
  errorElement.style.visibility = 'hidden';
  
  finalMessageElement.textContent = "Orange Pentagon = 9";
  finalMessageElement.style.visibility = 'visible';
}

submitButton.addEventListener('click', checkAnswer);

displayQuestion();
