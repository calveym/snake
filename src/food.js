var size, canvasSize, screen;

function Food (transferSize, TransferCanvasSize, transferScreen) {
  size = transferSize;
  canvasSize = TransferCanvasSize;
  screen = transferScreen;
  this.foodExists = false;
}

Food.prototype.drawFood = function () {
  if(this.foodExists) {
    this.printFood(this.foodCoor);
  } else {
    this.printFood(this.randomCoor());
  }

};

Food.prototype.randomCoor = function () {
  var x = Math.floor(Math.random() * size);
  var y = Math.floor(Math.random() * size);
  return [x,y];
};

Food.prototype.printFood = function ([x, y]) {
  screen.fillRect(x * size, y * size, size, size);
  this.foodCoor = [x,y];
  this.foodExists = true;
};
