const dino = document.getElementById("dino");
const plant = document.getElementById("plant");
const gameOverText = document.getElementById("gameOver");

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300   );
  }
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(
    window.getComputedStyle(dino).getPropertyValue("top")
  );

  let plantLeft = parseInt(
    window.getComputedStyle(plant).getPropertyValue("left")
  );

  if (plantLeft > 0 && plantLeft < 50 && dinoTop >= 140) {
    clearInterval(isAlive);
        plant.style.animation = "none";
        plant.style.display = "none";
        dino.style.animation = "none";
        gameOverText.style.display = "block";
  }
}, 10);

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    jump();
  }
});
