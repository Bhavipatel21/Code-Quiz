
//create varaible for html sections
var header = document.querySelector("#main-header");
var highScore = document.querySelector("#high-score");
var timer = document.querySelector("#time");
var quizContainer = document.querySelector("#quiz-container");
var result = document.querySelector("#result");
var startBtn = document.querySelector("#start-button");
var quizOver = document.querySelector("#quiz-done");
var finalScore = document.querySelector("#final-score");

//create elements, add text and append to html section

var scoreText = document.createElement("a");
scoreText.setAttribute("href", "highscore.html");
scoreText.setAttribute("class", "text-dark");
scoreText.innerHTML = "View HighScore";
highScore.appendChild(scoreText);



var headerText = document.createElement("p");
headerText.innerHTML =
  "This Javascript will sureley help you to brush up your JavaScript concenpts.It's Quiz Time!!! Please Note that 10 seconds will be deducted if your answer is incorrect.";

quizContainer.appendChild(headerText);
var startQuizBtn = document.createElement("button");
startQuizBtn.setAttribute("class", "btn-info border-dark");
startQuizBtn.innerHTML = "Start quiz";
startBtn.appendChild(startQuizBtn);
timer.textContent = "Timer : ";

var secondsLeft = 30;

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
      quizOver.classList.remove("d-none");
      quizContainer.classList.add("d-none");
    }
    else {
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
      "d-grid col-3 m-3 mx-auto btn-sm border-dark btn-block col-lg-10"
    );
    choicesBtn.textContent = userchoices[i];
    quizContainer.appendChild(choicesBtn);
    choicesBtn.addEventListener("click", validateAnswer);
  }
}

function validateAnswer(evt) {
  var quizItem = myQuestions.length;
  var answer = myQuestions[questionIndex].answer;
  var correctAnswer = evt.target.innerText;

  if (correctAnswer === answer) {

    result.textContent = "Correct";
    score++;
    console.log(score)
    finalScore.textContent = "Your final score: " + score;
  }
  else {
    result.textContent = "Incorrect";
    secondsLeft -= 10;
  }


  if (questionIndex === quizItem - 1) {
    secondsLeft = 0;
    quizContainer.classList.add("d-none");


    result.classList.add("d-none");
    quizOver.classList.remove("d-none");

  } else {
    questionIndex++;
    showquesitons();
  }
}
// Event listener to capture initials and local storage for initials and score
var userInitial = document.querySelector("#user-initial");
userInitial.textContent = "";

var submitInitialBtn = document.querySelector("#submit-initial");
submitInitialBtn.addEventListener("click", function () {

  var initialText = userInitial.value;
  if (initialText === null) {

    console.log("No value entered!");

  } else {
    var finalText = {
      initials: initialText,
      score: score
    }
    console.log(finalText);
    var allScores = localStorage.getItem("allScores");

    if (allScores === null) {
      allScores = [];
    } else {
      allScores = JSON.parse(allScores);
    }

    allScores.push(finalText);
    var newScore = JSON.stringify(allScores);
    localStorage.setItem("allScores", newScore);
    window.location.href = "highscore.html"
  }
});