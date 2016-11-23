describe("Collision", function () {
  beforeEach(function () {
    collision = new Collision();
  });

  describe("#isSnakeOnSnake", function () {
    it("returns true if duplicate in snake array", function () {
      var snake = new Snake();
      endGame = jasmine.createSpy("endGame spy");
      snake.position = [[10, 10], [10, 9], [9, 9], [9, 10], [10, 10]];
      expect(collision.isSnakeOnSnake(snake, endGame)).toEqual(true);
    });
    
    it("calls endgame", function () {
      snake = new Snake();
      endGame = jasmine.createSpy("endGame spy");
      snake.position = [[10, 10], [10, 9], [9, 9], [9, 10], [10, 10]];
      collision.isSnakeOnSnake(snake, endGame);
      expect(endGame).toHaveBeenCalled();
    });
  });
});
