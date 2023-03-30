const mario = document.getElementById("mario");
const goomba = document.getElementById("goomba");

function moveMario() {
  mario.style.left = parseInt(mario.style.left) + 5 + "px";
}

function moveGoomba() {
  goomba.style.left = parseInt(goomba.style.left) - 5 + "px";
}

setInterval(moveMario, 50);
setInterval(moveGoomba, 50);
