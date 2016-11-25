var size, screen, collision;

function Food (collis, transferSize, transferScreen) {
  collision = collis;
  this.position = [4, 4];
  this.score = 1;
  size = transferSize;
  screen = transferScreen;
  this.foodExists = true;
  this.mice = new Image();
  this.mice.src = "/img/mice.png";
}

Food.prototype.randomCoor = function () {
  this.position[0] = Math.floor(Math.random() * 40);
  this.position[1] = Math.floor(Math.random() * 25);
};

Food.prototype.generateFood = function (snake, tick) {
  while(collision.isFoodEaten(snake, this, tick)) {
    this.randomCoor();
  }
};

Food.prototype.printFood = function () {
  this.foodExists = true;
  this.make_mouse(this.position[0] * size, this.position[1] * size, size, size);

};

Food.prototype.make_mouse = function (x,y,size) {
    screen.drawImage(this.mice, x, y , size, size)
  };


Food.prototype.updateFood = function (snake, tick) {
  this.generateFood(snake, tick);
};
