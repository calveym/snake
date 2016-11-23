describe("Food", function () {

  beforeEach(function (){
   food = new Food();
  });

  describe("#updateFood", function(){
    it("generates food rect", function () {
      spyOn(food, 'randomCoor').and.returnValue("[3,4]");
      spyOn(food, 'drawFood');
      food.updateFood();
      expect(food.drawFood).toHaveBeenCalled();
      expect(food.randomCoor).toHaveBeenCalled();
    });
  });
});
