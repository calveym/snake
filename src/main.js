window.onload = function () {
  var screen = document.getElementById("screen").getContext("2d");
  var tick = 0;
  var snake = new Snake();

  function gameLoop(self) {
    tick += 1;
    updatePosition();
    if(tick % 20 === 0) {
      draw();
    }
    requestAnimationFrame(gameLoop);
  }
  gameLoop(this);

  function updatePosition() {
  }

  function draw() {
    screen.clearRect(0, 0, 400, 400);
    snake.position.forEach(function(cube) {
      screen.fillRect(cube[0] * 40, cube[1] * 40, 40, 40);
    });
  }

  function Snake() {
    this.direction = 'down';
    this.position = [[1, 1]];
  }

  Snake.prototype.getHeadPosition = function () {
    return this.position[0];
  };

};
