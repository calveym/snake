window.onload = function () {
  var screen = document.getElementById("screen").getContext("2d");
  var tick = 0;
  var snake = new Snake();
  var size = 20;
  var canvasSize = 500;

  function gameLoop(self) {
    tick += 1;
    if(tick % 10 === 0) {
      updatePosition();
    }
    draw();
    requestAnimationFrame(gameLoop);
  }
  gameLoop(this);
  window.addEventListener('keydown',doKeyDown,true);

  function updatePosition() {
    var head = snake.getHeadPosition();
    if (snake.direction === 'down'){
      snake.position.unshift([head[0], head[1] + 1]);
    }
    else if (snake.direction === 'up'){
      snake.position.unshift([head[0], head[1] - 1]);
    }
    else if (snake.direction === 'left'){
      snake.position.unshift([head[0] - 1, head[1]]);
    }
    else if (snake.direction === 'right'){
      snake.position.unshift([head[0] + 1, head[1]]);
    }
    snake.position.pop();

    snake.checkBoundary();
  }

  function draw() {
    screen.clearRect(0, 0, canvasSize, canvasSize);
    snake.position.forEach(function(cube) {
      screen.fillRect(cube[0] * size, cube[1] * size, size, size);
    });
  }

  function Snake() {
    this.direction = 'down';
    this.position = [[10, 10], [10, 9], [10, 8], [10, 7]];
  }

  Snake.prototype.getHeadPosition = function () {
    return this.position[0];
  };

  Snake.prototype.checkBoundary = function () {
    if (this.position[0][0] >= 25){
      this.position[0][0] = 0;
    }
    else if (this.position[0][1] >= 25){
      this.position[0][1] = 0;
    }
    else if (this.position[0][0] < 0){
      this.position[0][0] = 24;
    }
    else if (this.position[0][1] < 0){
      this.position[0][1] = 24;
    }
  };

  function doKeyDown(evt){
  switch (evt.keyCode) {
  case 38:  /* Up arrow was pressed */
          if(snake.direction != 'down'){
                  snake.direction = 'up';
                }
  break;
  case 40:  /* Down arrow was pressed */
          if(snake.direction != 'up'){
                 snake.direction = 'down';
               }

  break;
  case 37:  /* Left arrow was pressed */
          if(snake.direction != 'right'){
                  snake.direction = 'left';
              }
  break;
  case 39:  /* Right arrow was pressed */
          if(snake.direction != 'left'){
                  snake.direction = 'right';
              }
  break;
  }
  }

};
