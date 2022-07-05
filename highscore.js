var highScore = JSON.parse(localStorage.getItem("high-score"))
var scores = document.querySelector("#scores");
scores.innerText = highScore.initals + " " + highScore.timeLeft 

var backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click" , () => {
    document.location.href = "index.html";
   
})