var size, canvasSize, screen;

function Snake(transferSize, TransferCanvasSize, transferScreen) {
  size = transferSize;
  canvasSize = TransferCanvasSize;
  screen = transferScreen;
  this.direction = 'down';
  this.position = [[10, 10]];
}

Snake.prototype.getHeadPosition = function () {
  return this.position[0];
};


Snake.prototype.move = function(head) {
  if (this.direction === 'down'){
    this.position.unshift([head[0], head[1] + 1]);
  }
  else if (this.direction === 'up'){
    this.position.unshift([head[0], head[1] - 1]);
  }
  else if (this.direction === 'left'){
    this.position.unshift([head[0] - 1, head[1]]);
  }
  else if (this.direction === 'right'){
    this.position.unshift([head[0] + 1, head[1]]);
  }
};

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
