describe("Snake", function () {
  beforeEach(function () {
    snake = new Snake();
  });

  it("Has a coordinate position", function () {
    expect(snake.position[0][0]).toEqual(10);
  });

  describe("#getHeadPosition", function () {
    it("returns head position", function () {
      expect(snake.head()).toEqual([10, 10]);
    });
  });


});
