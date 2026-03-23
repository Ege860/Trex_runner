const dino = document.getElementById("dino");
const plant = document.getElementById("plant");
const gameOverText = document.getElementById("gameOver");
const scoreText = document.getElementById("score");
const highScoreText = document.getElementById("highscore");
const newRecordText = document.getElementById("newRecord");

let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let recordBroken = false;

highScore = Number(highScore);

scoreText.textContent = "Score: 0";
highScoreText.textContent = "Highscore: " + highScore;
newRecordText.style.display = "none";
gameOverText.style.display = "none";

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let scoreInterval = setInterval(function () {
  score++;
  scoreText.textContent = "Score: " + score;

  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    highScoreText.textContent = "Highscore: " + highScore;

    if (!recordBroken) {
      newRecordText.style.display = "block";
      recordBroken = true;

      setTimeout(function () {
        newRecordText.style.display = "none";
      }, 2000);
    }
  }
}, 100);

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let plantLeft = parseInt(window.getComputedStyle(plant).getPropertyValue("left"));

  if (plantLeft > 0 && plantLeft < 50 && dinoTop >= 140) {
    clearInterval(isAlive);
    clearInterval(scoreInterval);

    plant.style.animation = "none";
    plant.style.display = "none";
    gameOverText.style.display = "block";
  }
}, 20);

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    jump();
  }
});