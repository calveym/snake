describe("Food", function () {
  var food,
      collision,
      snake;

  beforeEach(function (){
    food = new Food();
  });

  describe("#score", function () {
    it("Goes up by 1 when food is eaten", function () {
      collision = new Collision();
      snake = new Snake();
      food.position = [10, 10];
      expect(food.score).toBe(1);
      collision.isFoodEaten(snake, food, 1);
      expect(food.score).toBe(2);
    });
  });
});
