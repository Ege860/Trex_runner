const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let gameOver = false;

const dino = {
  x: 50,
  y: 220,
  width: 40,
  height: 40,
  velocityY: 0,
  gravity: 0.8,
  jumpPower: -12,
  grounded: true
};

function drawDino() {
  ctx.fillStyle = "green";
  ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
}

function updateDino() {
  dino.velocityY += dino.gravity;
  dino.y += dino.velocityY;

  const groundY = 220;

  if (dino.y >= groundY) {
    dino.y = groundY;
    dino.velocityY = 0;
    dino.grounded = true;
  }
}

function jump() {
  if (dino.grounded) {
    dino.velocityY = dino.jumpPower;
    dino.grounded = false;
  }
}

function drawGround() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 260, canvas.width, 2);
}

function gameLoop() {
  if (gameOver) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawGround();
  updateDino();
  drawDino();

  requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    jump();
  }
});

gameLoop();