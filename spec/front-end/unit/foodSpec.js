describe("Food", function () {

  beforeEach(function (){

    food = new Food();
    spyOn(var transferScreen, 'fillRect')
  });


  describe("#updateFood", function(){
    it("generates food rect", function () {
      spyOn(food, 'randomCoor').and.returnValue("[3,4]")
      food.updateFood();
      expect(food.foodCoor).toEqual([3,4]);

    });
  });

  describe("#drawFood", function(){
    it("should print food", function () {
      food.drawFood([3,4]);
      expect(food.foodCoor).toEqual([3,4]);
      expect(food.foodExists).toEqual(true);

    });
  });




});
