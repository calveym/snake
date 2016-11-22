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

Food.prototype.isFoodEaten = function (head) {
  if (head[0] === this.foodCoor[0] && head[1] === this.foodCoor[1]) {
    this.foodExists = false;
    this.feedTick = tick;
    this.updateFood();
  }
};
