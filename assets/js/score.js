var showScore = document.querySelector("#show-score");
var clearHighScoreBtn = document.querySelector("#clear-highscore");
var showFinalHighScore = localStorage.getItem("score");
var showUserInitial = localStorage.getItem("initial");
var highScore = document.createElement("p");



highScore.textContent = showUserInitial + ":" + showFinalHighScore;
showScore.appendChild(highScore);

//show localstorage data

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        showScore.appendChild(createLi);

    }
}


//back to quiz
var goBacktoQuiz = document.querySelector("#gobackto-quizbtn");
goBacktoQuiz.addEventListener("click", function () {
  window.location.href = "index.html";
});



//clear score 
  clearHighScoreBtn.addEventListener("click", function () {
  localStorage.clear();
  showScore.classList.add("d-none");
});
