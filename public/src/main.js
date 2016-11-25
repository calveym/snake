window.onload = function () {
  var screen = document.getElementById("screen").getContext("2d");
  var tick = 0;
  var size = 20;
  var canvasSizeHeight = 500;
  var canvasSizeWidth = 800;
  var snake = new Snake(size, screen);
  var collision = new Collision();
  var current_position = snake.head();
  var food = new Food(collision, size, screen, snake);

  function gameLoop(self) {
    tick++;
    if(tick === 1){
      setup();
    }
    if(tick % 5 === 0) {
      update();
    }
    draw();
    requestAnimationFrame(gameLoop);
  }


  gameLoop(this);

  function endGame(thing) {
    console.log("game over, snake died :( Your score: " + food.score);
    document.getElementById("game").innerHTML = "game over, snake died :( Your score: " + food.score;
    window.location.replace("/highscore1997456/" + food.score);
  }

  function createButton () {
    var button = document.createElement("button");
    var game = document.getElementById("game");
    button.innerHTML = "New Game";
    button.id = "arcade-button";
    game.appendChild(button);
    document.querySelector("#arcade-button").addEventListener("click", function() {
      location.reload();
    });

  }

  window.addEventListener('keydown', doKeyDown, true);




  function setup() {
    food.printFood();
  }

  function update() {
    collision.update(snake, tick, endGame, food);
    snake.move(snake.head());
    food.updateFood(snake, tick);
    snake.shrink(food, tick);
  }

  function draw() {
    clearScreen();
    drawScore();
    food.printFood(snake);
    snake.drawSnake();
  }

  function clearScreen() {
    screen.clearRect(0, 0, canvasSizeWidth,canvasSizeHeight);
  }

  function drawScore() {
    screen.font = "30px Open Sans";
    screen.fillText(food.score, 10, 40);
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
