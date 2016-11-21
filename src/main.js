window.onload = function () {
  var screen = document.getElementById("screen").getContext("2d");
  var x = 0;
  var y = 0;
  var tick = 0;

  function gameLoop(self) {
    tick += 1;
    screen.clearRect(0, 0, 400, 400);
    x += 1;
    y += 1;
    screen.fillRect(x, y, 40, 40);
    requestAnimationFrame(gameLoop);
  }
  gameLoop(this);

  draw();

};
