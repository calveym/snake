var size, canvasSize, screen;

function Food (transferSize, TransferCanvasSize, transferScreen) {
  size = transferSize;
  canvasSize = TransferCanvasSize;
  screen = transferScreen;
  this.foodExists = false;
}

Food.prototype.drawFood = function () {
  if(this.foodExists) {
    this.printFood(this.position);
  } else {
    this.printFood(this.randomCoor());
  }

};

Food.prototype.randomCoor = function () {
  var x = Math.floor(Math.random() * size);
  var y = Math.floor(Math.random() * size);
  return [x,y];
};

Food.prototype.foodOnSnake = function (snake) {
  for(i=0; i < snake.position.length; i++)
    if (food.position[0] === snake.position[i][0] && food.position[1] ===snake.position[i][1])
    {
    this.drawFood(this.randomCoor());
    }

};

Food.prototype.printFood = function ([x, y]) {
  screen.fillRect(x * size, y * size, size, size);
  this.position = [x,y];
  this.foodExists = true;
};
