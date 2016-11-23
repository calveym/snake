function Collision() {}

Collision.prototype.resolveBoundary = function (snake) {
  if (snake.position[0][0] >= 25){
    snake.position[0][0] = 0;
  }
  else if (snake.position[0][1] >= 25){
    snake.position[0][1] = 0;
  }
  else if (snake.position[0][0] < 0){
    snake.position[0][0] = 24;
  }
  else if (snake.position[0][1] < 0){
    snake.position[0][1] = 24;
  }
};

Collision.prototype.isFoodEaten = function (tick, head, food) {
  if (head[0] === food.foodCoor[0] && head[1] === food.foodCoor[1]) {
    food.foodExists = false;
    food.feedTick = tick;
    food.updateFood();
  }
};

Collision.prototype.isSnakeOnSnake = function (snake, endGame) {
  console.log("Ye running");
  console.log(snake);
  if(this.hasDuplicates(snake.position)) {
    endGame();
  }
  return true;
};

Collision.prototype.hasDuplicates = function (array) {
  return (new Set(array)).size !== array.length;
};
