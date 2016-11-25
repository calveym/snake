function Collision() {
  this.coin = new Audio('./img/Pickup_coin2.wav');
}

Collision.prototype.resolveBoundary = function (snake) {
  if (snake.position[0][0] >= 40){
    snake.position[0][0] = 0;
  }
  else if (snake.position[0][1] >= 25){
    snake.position[0][1] = 0;
  }
  else if (snake.position[0][0] < 0){
    snake.position[0][0] = 39;
  }
  else if (snake.position[0][1] < 0){
    snake.position[0][1] = 24;
  }
};

Collision.prototype.isFoodEaten = function (snake, food, tick) {
  for(i=0; i < snake.position.length; i++) {
    if (food.position[0] === snake.position[i][0] && food.position[1] === snake.position[i][1]){
      food.feedTick = tick;
      this.coin.play();
      food.score++;
      return(true);
    }
  }
};

Collision.prototype.isSnakeOnSnake = function (snake, endGame) {
  for(i=1; i < snake.position.length; i++){
    if (snake.position[i][0] === snake.head()[0] && snake.position[i][1] === snake.head()[1])
    {
      endGame();
      return(true);
    }
  }
};

Collision.prototype.update = function (snake, tick, endGame, food) {
  this.isSnakeOnSnake(snake, endGame);
  this.resolveBoundary(snake);
};
