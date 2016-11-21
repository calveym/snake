window.onload = function () {
  var screen = document.getElementById("screen").getContext("2d");
  var snake = [];
  var tick = 0;

  function gameLoop(self) {
    tick += 1;
    updatePosition();
    if(tick % 20 === 0) {
      draw();
    }
    requestAnimationFrame(gameLoop);
  }
  gameLoop(this);

  function updatePosition() {}

  function draw() {
    snake.forEach(function(cube) {
      screen.fillRect(cube[0] * 40, cube[1] * 40, 40, 40);
    });
  }

};
