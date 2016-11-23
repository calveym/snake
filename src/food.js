var size, canvasSize, screen;

function Food (transferSize, TransferCanvasSize, transferScreen) {
  size = transferSize;
  canvasSize = TransferCanvasSize;
  screen = transferScreen;
  this.foodExists = false;
}

Food.prototype.drawFood = function (snake) {
  if(this.foodExists) {
    this.printFood(snake, this.position);
  } else {
    this.printFood(snake, this.randomCoor());
  }

};

Food.prototype.randomCoor = function () {
  var x = Math.floor(Math.random() * size);
  var y = Math.floor(Math.random() * size);
  return [x,y];
};

Food.prototype.foodOnSnake = function (snake) {
  console.log(this)
  for(i=0; i < snake.position.length; i++)
    if (this.position[0] === snake.position[i][0] && this.position[1] === snake.position[i][1])
    {
    this.drawFood(this.randomCoor());
    }

};

Food.prototype.printFood = function (snake, [x, y]) {
  console.log(snake);
  this.foodOnSnake(snake);
  screen.fillRect(x * size, y * size, size, size);
  this.position = [x,y];
  this.foodExists = true;
};
