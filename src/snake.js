var size, screen;

function Snake(transferSize, transferScreen) {
  size = transferSize;

  screen = transferScreen;
  this.direction = 'down';
  this.position = [[10, 10],[10,9]];
  this.scale = new Image();
  this.scale.src = "img/scale.png";
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
  if(tick - food.feedTick >= 10) {
    this.position.pop();
  } else if(food.feedTick === undefined) {
    this.position.pop();
  }
};

Snake.prototype.drawSnake = function () {
  var scale = this.scale;
  this.position.forEach(function(cube) {
    screen.drawImage(scale, cube[0] * size, cube[1] * size, size, size);
  });
};
