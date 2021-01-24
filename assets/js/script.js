//create varaible for html sections

var header = document.querySelector("#main-header");
var highScore = document.querySelector("#high-score");
var timer = document.querySelector("#time");
var quizContainer = document.querySelector("#quiz-container");
var result = document.querySelector("#result");
var startBtn = document.querySelector("#start-button");
var quizOver = document.querySelector("#quiz-done");
var finalScore = document.querySelector("#final-score");

//finalScore.setAttribute("class","text-center")

//create elements, add text and append to html section

var scoreText = document.createElement("a");
scoreText.setAttribute("href", "highscore.html");
scoreText.setAttribute("class", "text-dark");
scoreText.innerHTML = "View HighScore";
highScore.appendChild(scoreText);

//set header text

var headerText = document.createElement("p");
headerText.innerHTML =
  "This Javascript will surely help you to brush up on your JavaScript concepts. Please note that 10 seconds will be deducted if your answer is incorrect. It's Quiz Time!!!";
//create startquiz button
quizContainer.appendChild(headerText);
var startQuizBtn = document.createElement("button");
startQuizBtn.setAttribute("class", "border-dark");
startQuizBtn.setAttribute("style", "color:white; background-color:purple");
startQuizBtn.innerHTML = "Start quiz";
startBtn.appendChild(startQuizBtn);
timer.textContent = "Timer : ";

//start time
var secondsLeft = 30;
var questionIndex = 0;
//set score
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
startQuizBtn.addEventListener("click", startTimer);
function startTimer() {
  startQuizBtn.classList.add("d-none");
  headerText.classList.add("d-none");
  setTimer();
  showquesitons();
}

function setTimer() {
  var timerInterval = setInterval(function () {
    timer.innerHTML = "Timer : " + secondsLeft + "seconds left!!";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      allDone()
    } else {
      secondsLeft--;
    }
  }, 1000);
}

//showquesitons

function showquesitons() {
  var userQuestions = myQuestions[questionIndex].question;
  var userchoices = myQuestions[questionIndex].choices;
  quizContainer.textContent = userQuestions;

  for (i = 0; i < userchoices.length; i++) {
    var choicesBtn = document.createElement("button");
    choicesBtn.setAttribute(
      "class",
      "d-grid col-3 m-3 mx-auto btn-sm col-lg-10"
    );

    choicesBtn.setAttribute("style", "color:white; background-color:purple");
    choicesBtn.textContent = userchoices[i];
    quizContainer.appendChild(choicesBtn);
    choicesBtn.addEventListener("click", validateAnswer);
  }
}

//validate answers

function validateAnswer(evt) {
  var quizItem = myQuestions.length;
  var answer = myQuestions[questionIndex].answer;
  var correctAnswer = evt.target.innerText;

  if (correctAnswer === answer) {
    result.textContent = "Correct";
    score++;
    finalScore.textContent = "Your final score: " + score;
  } else {
    result.textContent = "Incorrect";
    secondsLeft -= 10;
  }

  if (questionIndex === quizItem - 1) {
    secondsLeft = 0;
    allDone()
  } else {
    questionIndex++;
    showquesitons();
  }
}

// store initial and score to localstorage
var userInitial = document.querySelector("#user-initial");
userInitial.textContent = "";
var submitInitialBtn = document.querySelector("#submit-initial");
submitInitialBtn.setAttribute("style", "color:white; background-color:purple");
submitInitialBtn.addEventListener("click", function () {

  var initialText = userInitial.value;
  if (initialText.length === 0) {
    alert("Pleas enter your initial");
  } else {
    var finalText = {
      initials: initialText,
      score: score,
    };


    var allScores = localStorage.getItem("allScores");
    if (allScores === null) {
      allScores = [];
    } else {
      allScores = JSON.parse(allScores);
    }
    allScores.push(finalText);
    var newScore = JSON.stringify(allScores);
    localStorage.setItem("allScores", newScore);
    window.location.href = "highscore.html";
  }
});

function allDone() {
  quizContainer.classList.add("d-none");
  result.classList.add("d-none");
  quizOver.classList.remove("d-none");

}
