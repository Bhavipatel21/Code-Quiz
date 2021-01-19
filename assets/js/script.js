/* <!--create lable and append question here -->
<section id="question-text"><input type="text" class="form-control"></section>
<!--create buttons and append choices here-->
<button class="d-grid m-3"> this</button>
<button class="d-grid m-3"> test</button>
<button class="d-grid m-3"> test</button>
<button class="d-grid m-3"> test</button>
<!--append correct or incorrect answer text here -->
<input id="answer-text" type="text" class="form-control"></section>
<button class="d-grid start-quiz mx-auto">Start Quiz</button>  */
//create varaible for html sections

var header = document.querySelector("#main-header");
var highScore = document.querySelector("#high-score");
var timer = document.querySelector("#time");
var quizContainer = document.querySelector("#quiz-container");
var result = document.querySelector("#result");
var startBtn = document.querySelector("#start-button");

//create elements, add text and append to html section
var scoreText = document.createElement("p");
scoreText.innerHTML = "View HighScore";
highScore.appendChild(scoreText);

/*var timerText = document.createElement('p')
timerText.innerHTML = "Timer :"
timer.appendChild(timerText); */

var headerText = document.createElement("p");
headerText.innerHTML =
  "This Javascript will sureley help you to brush up your JavaScript concenpts.It's Quiz Time!!!";
quizContainer.appendChild(headerText);
var startQuizBtn = document.createElement("button");
startQuizBtn.innerHTML = "Start quiz";
startBtn.appendChild(startQuizBtn);
timer.textContent = "Timer : ";

var secondsLeft = 60;
var questionIndex = 0;
var score = 0;

//questions
var myQuestions = [
  //0
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<javascript>", "<js>", "<script>", "<scripting>"],
    answer: "<script>",
  },
  //1
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: [
      "Ther <head> section",
      "Both the <head> section and the <body> section are correct",
      "The <body> section",
    ],
    answer: "Both the <head> section and the <body> section are correct",
  },
  //2

  {
    question: "How do you create a function in JavaScript?",
    choices: [
      "function myFunction()",
      "function:myFunction()",
      "function=myFunction()",
    ],
    answer: "function myFunction()",
  },
  //3
  {
    question: "How can you add a comment in a JavaScript?",
    choices: [
      "<!--This is a comment-->",
      "'This is a comment",
      "//This is a comment",
    ],
    answer: "//This is a comment",
  },
];

//click on a start button - hide button

startQuizBtn.addEventListener("click", settime);
function settime() {
  startQuizBtn.classList.add("d-none");
  headerText.classList.add("d-none");

  showquesitons();

  var timerInterval = setInterval(function () {
    timer.innerHTML = "Timer : " + secondsLeft + "seconds left!!";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }

    secondsLeft--;
  }, 1000);
}

//showquesitons

function showquesitons() {
  var questions = myQuestions[questionIndex].question;
  var choices = myQuestions[questionIndex].choices;

  quizContainer.textContent = questions;

  for (i = 0; i < choices.length; i++) {
    var choicesBtn = document.createElement("button");

    choicesBtn.setAttribute("class", "d-grid m-3 mx-auto");
    choicesBtn.textContent = choices[i];
    quizContainer.appendChild(choicesBtn);
    choicesBtn.addEventListener("click", validateAnswer);
  }

  function validateAnswer(evt) {
    var answer = myQuestions[questionIndex].answer;

    //console.log(evt);
    //console.log(evt.target.innerText)
    //console.log("clicked")

    var correctAnswer = evt.target.innerText;

    if (correctAnswer === answer) {
      alert("correct answer");
      score++;
      alert(score);
      questionIndex++;
      showquesitons();

    } else 
    
    {
      alert("incorrect answer");
      questionIndex++;
      showquesitons();
    }
  }
}
