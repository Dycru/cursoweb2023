// Variables globales
var canvas;
var context;
var pacmanX = 50;
var pacmanY = 50;
var pacmanRadius = 20;
var pacmanMouthAngle = 0;
var pacmanMouthDirection = 1;
var pacmanSpeed = 5;
var canvasWidth = 600;
var canvasHeight = 400;

// Funci�n para dibujar a Pacman
function drawPacman() {
  // Dibujar la cabeza de Pacman
  context.beginPath();
  context.arc(pacmanX, pacmanY, pacmanRadius, pacmanMouthAngle * Math.PI, (2 - pacmanMouthAngle) * Math.PI);
  context.lineTo(pacmanX, pacmanY);
  context.fillStyle = "yellow";
  context.fill();

  // Actualizar el �ngulo de la boca de Pacman
  pacmanMouthAngle += 0.1 * pacmanMouthDirection;
  if (pacmanMouthAngle >= 0.5) {
    pacmanMouthDirection = -1;
  } else if (pacmanMouthAngle <= 0) {
    pacmanMouthDirection = 1;
  }

  // Mover a Pacman
  pacmanX += pacmanSpeed;
  if (pacmanX > canvasWidth) {
    pacmanX = 0;
  }
}

// Funci�n para actualizar la pantalla
function update() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  drawPacman();
  setTimeout(update, 10);
}

// Funci�n principal
function main() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  update();
}

// Llamar a la funci�n principal cuando la p�gina est� cargada
window.addEventListener("load", main);