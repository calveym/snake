var size, canvasSize, screen;

function Snake(transferSize, TransferCanvasSize, transferScreen) {
  size = transferSize;
  canvasSize = TransferCanvasSize;
  screen = transferScreen;
  this.direction = 'down';
  this.position = [[10, 10],[10,9]];
}

Snake.prototype.head = function () {
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

Snake.prototype.shrink = function (food, tick) {
  if(tick - food.feedTick >= 20) {
    this.position.pop();
  } else if(food.feedTick === undefined) {
    this.position.pop();
  }
};
