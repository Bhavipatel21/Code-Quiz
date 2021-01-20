var showScore = document.querySelector("#show-score");
var listHighScore = document.getElementById("list-highscore");
var clearHighScoreBtn = document.querySelector("#clear-highscore");
var showFinalHighScore = localStorage.getItem("score");
var showUserInitial = localStorage.getItem("initial");
//var highScore = document.createElement("p");



//highScore.textContent = showUserInitial + ":" + showFinalHighScore;
//showScore.appendChild(highScore);

//show localstorage data

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var addScoreBtn = document.createElement("button");
       // createListTag.setAttribute("class", "list-group list-group-item-dark justify-content-center")
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
goBacktoQuiz.addEventListener("click", function () {
  window.location.href = "index.html";
});



//clear score 
  clearHighScoreBtn.addEventListener("click", function () {
  localStorage.clear();
 // showScore.classList.add("d-none");
  listHighScore.classList.add("d-none");

});
