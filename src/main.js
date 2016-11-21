window.onload = function () {
  var screen = document.getElementById("screen").getContext("2d");
  var snake = [];
  var tick = 0;
  var vector = 1;

  function gameLoop(self) {
    tick += 1;
    screen.clearRect(0, 0, 400, 400);

    function addRect(x, y) {
      snake.push([x, y]);
    }

    snake.forEach(function(item) {
      screen.fillRect(item[0] * 40, item[1] * 40, 40, 40);
    });

    addRect(0, 0);
    addRect(2, 2);
    addRect(0, 8);
    addRect(5, 9);

    requestAnimationFrame(gameLoop);
  }
  gameLoop(this);

};
