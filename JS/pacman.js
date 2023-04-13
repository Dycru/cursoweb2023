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

// Función para dibujar a Pacman
function drawPacman() {
  // Dibujar la cabeza de Pacman
  context.beginPath();
  context.arc(pacmanX, pacmanY, pacmanRadius, pacmanMouthAngle * Math.PI, (2 - pacmanMouthAngle) * Math.PI);
  context.lineTo(pacmanX, pacmanY);
  context.fillStyle = "yellow";
  context.fill();

  // Actualizar el ángulo de la boca de Pacman
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

// Función para actualizar la pantalla
function update() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  drawPacman();
  setTimeout(update, 10);
}

// Función principal
function main() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  update();
}

// Llamar a la función principal cuando la página esté cargada
window.addEventListener("load", main);