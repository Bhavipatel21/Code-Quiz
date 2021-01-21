var showScore = document.querySelector("#show-score");
var listHighScore = document.getElementById("list-highscore");
var clearHighScoreBtn = document.querySelector("#clear-highscore");
clearHighScoreBtn.setAttribute("style", "color:white; background-color:purple");
var showFinalHighScore = localStorage.getItem("score");
var showUserInitial = localStorage.getItem("initial");

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var addScoreBtn = document.createElement("button");
        addScoreBtn.setAttribute("style", "color:white; background-color:purple");
         addScoreBtn.setAttribute(
        "class",
        "d-grid m-2 col-3 mx-auto btn-sm border-dark btn-block col-lg-4"
      );
        addScoreBtn.textContent = allScores[i].initials + " : " + allScores[i].score;
        listHighScore.appendChild(addScoreBtn);

    }
}


//back to quiz
var goBacktoQuiz = document.querySelector("#gobackto-quizbtn");
goBacktoQuiz.setAttribute("style", "color:white; background-color:purple");
goBacktoQuiz.addEventListener("click", function () {
  window.location.href = "index.html";
});



//clear score 
  clearHighScoreBtn.addEventListener("click", function () {
  localStorage.clear();
 // showScore.classList.add("d-none");
  listHighScore.classList.add("d-none");

});
