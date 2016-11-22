describe("Collision", function () {
  describe("#runChecks", function () {

  });
  describe("#snakeOnSnake", function () {

    spyOn(snake, 'position')
    snake.position = [[10, 10], [10, 9], [9, 9], [9, 10], [10, 10]]
    it("returns true if duplicate in snake array", function () {
      collision = new Collision
      expect(collision.isSnakeOnSnake(snake.position).toEqual(true);
    });
  });
});
