var currentQuestionNumber = 0;

var questionObjects = [
  {
    question: "This is the first question"
  },
  {
    question: "This is the second question"
  },

  {
    question: "This is the third question"
  },

  {
    question: "This is the fourth question"
  }
]

// var questionDiv = document.querySelector(".question")

// questionDiv.style.display = "none"

var questionH3 = document.querySelector('#questionText');
var option1Button = document.querySelector('#option1');
var option2Button = document.querySelector('#option2');

var allOptionButtons = document.querySelectorAll(".optionBtn");

for (let i = 0; i < allOptionButtons.length; i++) {
  allOptionButtons[i].addEventListener('click', nextQuestion)

}

console.log(allOptionButtons)

function showQuestion() {
  var questionDiv = document.querySelector(".question")
  questionDiv.style.display = "block"

  var welcomeDiv = document.querySelector(".welcome")
  welcomeDiv.style.display = "none"
}

function nextQuestion() {
  currentQuestionNumber++; // currentQuestionNumber = currentQuestionNumber + 1;
  questionH3.textContent = questionObjects[currentQuestionNumber].question;
  //   option1Button.textContent = "This is the answer"
  //   option2Button.textContent = "This is not the answer"
}

var startQuiz = document.querySelector(".startbutton")
startQuiz.addEventListener("click", showQuestion)



// if (questionNumber == 1) {
//   option1Button.textContent = "This is the answer"
//   option2Button.textContent = "This is not the answer"
// } else if (questionNumber == 2) {
//   option1Button.textContent = "The answer is 1"
//   option2Button.textContent = "The asnwer is 5"
// }

