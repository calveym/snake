describe("Snake", function () {
  var snake;
  var head;

  beforeEach(function () {
   snake = new Snake();
  head = snake.head();
  });

  it("Has a coordinate position", function () {
    expect(snake.position[0][0]).toEqual(10);
  });

  describe("#getHeadPosition", function () {
    it("returns head position", function () {
      expect(snake.head()).toEqual([10, 10]);
    });
  });
  describe("#move", function () {
    it("moves snake down", function () {
      snake.move(head);
      expect(snake.head()).toEqual([10, 11]);
    });
    it("moves snake up", function () {
      snake.direction = 'up';
      snake.move(head);
      expect(snake.head()).toEqual([10, 9]);
    });
    it("moves snake left", function () {
      snake.direction = 'left';
      snake.move(head);
      expect(snake.head()).toEqual([9, 10]);
    });
    it("moves snake right", function () {
      snake.direction = 'right';
      snake.move(head);
      expect(snake.head()).toEqual([11, 10]);
    });
  });


});
