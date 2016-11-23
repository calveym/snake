describe("Collision", function () {
  beforeEach(function () {
    collision = new Collision();
  });

  describe("#runChecks", function () {
  });

  describe("#isSnakeOnSnake", function () {
    it("calls endGame() if duplicate in snake array", function () {
      var snake = new Snake();
      function endGame() {
        console.log("success");
      }
      snake.position = [[10, 10], [10, 9], [9, 9], [9, 10], [10, 10]];
      expect(collision.isSnakeOnSnake(snake, function () {console.log("success");})).toEqual(true);
    });

  });

  describe("#hasDuplicates", function () {
    it("returns true for an array of arrays", function () {
      expect(collision.hasDuplicates([10, 10], [10, 9], [10, 10])).toEqual(true);
    });
  });
});
