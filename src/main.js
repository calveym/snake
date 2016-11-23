window.onload = function () {
  var screen = document.getElementById("screen").getContext("2d");
  var tick = 0;
  var size = 20;
  var canvasSize = 500;
  var snake = new Snake(size, canvasSize, screen);
  var food = new Food(size, canvasSize, screen);
  var collision = new Collision();
  var current_position = snake.head();

  function gameLoop(self) {
    tick++;
    if(tick === 1){
      setup();
    }
    if(tick % 6 === 0) {
      update();
    }
    draw();
    requestAnimationFrame(gameLoop);
  }

  gameLoop(this);

  function endGame() {
    console.log("game over, snake died :( Your score: " + snake.position.length * 100);
    document.getElementById("game").innerHTML = "game over, snake died :( Your score: " + snake.position.length * 100;
      // hide canvas and show score page
  }

  window.addEventListener('keydown', doKeyDown, true);


  function setup() {
    food.updateFood();
  }

  function update() {
    var head = snake.head();
    collision.isSnakeOnSnake(snake, endGame);
    collision.isFoodEaten(tick, head, food);
    snake.move(head);
    if(tick - food.feedTick >= 20) {
      snake.position.pop();
    } else if(food.feedTick === undefined) {
      snake.position.pop();
    }
    collision.resolveBoundary(snake);
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
          if (current_position[0] != snake.head()[0]){
            current_position = snake.head();
            move('up');
          }
        }
      break;
      case 40:
        if(snake.direction != 'up'){
          if (current_position[0] != snake.head()[0]){
            current_position = snake.head();
            move('down');
          }
        }
      break;
      case 37:
        if(snake.direction != 'right'){
          if (current_position[1] != snake.head()[1]){
            current_position = snake.head();
            move('left');
          }
        }
      break;
      case 39:
        if(snake.direction != 'left'){
          if (current_position[1] != snake.head()[1]){
            current_position = snake.head();
            move('right');
          }
        }
      break;
    }
  }

  function move(direction){
    snake.direction = direction;
  }
};
