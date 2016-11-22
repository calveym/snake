describe("Collision", function () {
  describe("#runChecks", function () {

  });
  describe("#snakeOnSnake", function () {
    it("returns true if duplicate in snake array", function () {
      snakeArray = [[10, 10], [10, 9], [9, 9], [9, 10], [10, 10]];
      expect(collision.isSnakeOnSnake(snakeArray)).toEqual(true);
    });
  });
});
