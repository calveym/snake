describe("Collision", function () {
  beforeEach(function () {
    collision = new Collision();
  });

  describe("#isSnakeOnSnake", function () {
    it("calls endGame() if duplicate in snake array", function () {
      var snake = new Snake();
      function endGame() {
        console.log("success");
      }
      snake.position = [[10, 10], [10, 9], [9, 9], [9, 10], [10, 10]];
      expect(collision.isSnakeOnSnake(snake, endGame)).toEqual(true);
    });
  });
});
