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

  function endGame() {
    console.log("game over, snake died :( Your score: " + snake.position.length * 100);
    document.getElementById("game").innerHTML = "game over, snake died :( Your score: " + snake.position.length * 100;
      // hide canvas and show score page
  }

  window.addEventListener('keydown', doKeyDown, true);


  function setup() {
    food.drawFood();
  }

  function update() {
    var head = snake.head();
    collision.update(snake, tick, endGame, food);
    snake.move(head);
    snake.shrink(food, tick);
  }

  function draw() {
    clearScreen();
    food.drawFood();
    snake.drawSnake();
  }

  function clearScreen() {
    screen.clearRect(0, 0, canvasSize, canvasSize);
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
