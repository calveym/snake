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
  for(i=1; i < snake.position.length; i++){
    if (snake.position[i][0] === snake.head()[0] && snake.position[i][1] === snake.head()[1])
    {
      endGame()
    }
  };
};
