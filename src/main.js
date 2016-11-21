window.onload = function () {
  var screen = document.getElementById("screen").getContext("2d");
  var snake = [];
  var tick = 0;

  function gameLoop(self) {
    tick += 1;
    updatePosition();
    draw();
    requestAnimationFrame(gameLoop);
  }
  gameLoop(this);
  function updatePosition() {}
  function draw() {}
  
};
