var size, canvasSize, screen, collision;

function Food (collis, transferSize, TransferCanvasSize, transferScreen) {
  collision = collis;
  this.position = [4, 4];
  size = transferSize;
  canvasSize = TransferCanvasSize;
  screen = transferScreen;
  this.foodExists = true;
}

Food.prototype.randomCoor = function () {
  this.position[0] = Math.floor(Math.random() * size);
  this.position[1] = Math.floor(Math.random() * size);
};

Food.prototype.generateFood = function (snake, tick) {
  while(collision.isFoodEaten(snake, this, tick)) {
    this.randomCoor();
  }
};

Food.prototype.printFood = function () {
  this.foodExists = true;
  screen.fillRect(this.position[0] * size, this.position[1] * size, size, size);
};

// Food.prototype.make_mouse = function (screen, x,y,size) {
//   base_image = new Image();
//   base_image.src = 'img/mice.png'
//   base_image.onload = function () {
//     screen.drawImage(base_image, x, y , size, size)
//   }
//
// };

Food.prototype.updateFood = function (snake, tick) {
  this.generateFood(snake, tick);
};
