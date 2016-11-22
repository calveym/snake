window.onload = function () {
  var screen = document.getElementById("screen").getContext("2d");
  var tick = 0;
  var size = 20;
  var canvasSize = 500;
  var snake = new Snake(size, canvasSize, screen);
  var food = new Food(size, canvasSize, screen);


  function gameLoop(self) {
    tick += 1;
    if(tick === 1){
      setup();
    }
    if(tick % 7 === 0) {
      update();
    }
    draw();
    requestAnimationFrame(gameLoop);
  }

  gameLoop(this);
  window.addEventListener('keydown',doKeyDown,true);

  function setup() {
    food.updateFood();
  }

  function update() {
    var head = snake.getHeadPosition();
    food.isFoodEaten(head);
    snake.move(head);
    if(tick - food.feedTick >= 20) {
      snake.position.pop();
    } else if(food.feedTick === undefined) {
      snake.position.pop();
    }
    snake.checkBoundary();
  }

  function draw() {
    screen.clearRect(0, 0, canvasSize, canvasSize);
    food.updateFood();
    snake.position.forEach(function(cube) {
      screen.fillRect(cube[0] * size, cube[1] * size, size, size);
    });
  }
};
