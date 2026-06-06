const canvas = document.getElementById("gameCanvas"); 
const ctx = canvas.getContext("2d); 
let playerY = 200; 
let computerY = 200;
let ballX = 400;
let ballY = 250;
let ballSpeedX = 5;
let ballSpeedY = 3;
const paddleWidth = 10;
const paddleHeight = 100;
document.addEventListener("mousemove", funtion(event) {
  let rect = canvas.getBoundingClientRect();
  playerY = event.ClientY - rect.top - paddleHeight / 2;
});
function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillRect(20, playerY, paddleWidth, paddleHeight);
  ctx.fillRect(770, computerY, paddleWidth, paddleHeight);
  ctx.beginPath();
  ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
  ctx.fill();
}
function update() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  if (ballY < 0 || ballY > canvas.height) {
    ballSpeedY *= -1;
  }
  computerY += (ballY - (computerY + paddleHeight / 2)) * 0.05;
  if (ballX < 0 || ballX > canvas.width) {
    ballX = 400;
    ballY = 250;
  }
}
function gameLoop() {
  update();
  draw();
}
setInterval(gameLoop, 1000 / 60);
  
