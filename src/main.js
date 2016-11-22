window.onload = function () {
  var screen = document.getElementById("screen").getContext("2d");
  var tick = 0;
  var size = 20;
  var canvasSize = 500;
  var snake = new Snake(size, canvasSize, screen);
  var food = new Food(size, canvasSize, screen);
  var collision = new Collision();


  function gameLoop(self) {
    tick++;
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
  window.addEventListener('keydown', doKeyDown, true);

  function setup() {
    food.updateFood();
  }

  function update() {
    var head = snake.getHeadPosition();
    collision.isFoodEaten(tick, head, food);
    snake.move(head);
    if(tick - food.feedTick >= 20) {
      snake.position.pop();
    } else if(food.feedTick === undefined) {
      snake.position.pop();
    }
    collision.checkBoundary(snake);
  }

  function draw() {
    screen.clearRect(0, 0, canvasSize, canvasSize);
    food.updateFood();
    snake.position.forEach(function(cube) {
      screen.fillRect(cube[0] * size, cube[1] * size, size, size);
    });
  }

  function doKeyDown(evt){
    switch (evt.keyCode) {
      case 38:
        if(snake.direction != 'down'){
          snake.direction = 'up';
        }
      break;
      case 40:
        if(snake.direction != 'up'){
          snake.direction = 'down';
        }
      break;
      case 37:
        if(snake.direction != 'right'){
          snake.direction = 'left';
        }
      break;
      case 39:
        if(snake.direction != 'left'){
          snake.direction = 'right';
        }
      break;
    }
  }
};
