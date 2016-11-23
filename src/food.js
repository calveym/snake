var size, canvasSize, screen;

function Food (transferSize, TransferCanvasSize, transferScreen) {
  size = transferSize;
  canvasSize = TransferCanvasSize;
  screen = transferScreen;

  this.foodExists = false;
}

Food.prototype.updateFood = function () {
  if(this.foodExists) {
    this.drawFood(this.foodCoor);
    return (true)
  } else {
    this.drawFood(this.randomCoor());
    return (false)
  }

};

Food.prototype.randomCoor = function () {
  var x = Math.floor(Math.random() * size);
  var y = Math.floor(Math.random() * size);
  return [x,y];
};

Food.prototype.drawFood = function ([x, y]) {
    screen.fillRect(x * size, y * size, size, size);
    this.foodCoor = [x,y];
    this.foodExists = true;
};
