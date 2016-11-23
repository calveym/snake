describe("Food", function () {

  beforeEach(function (){
   food = new Food();
  });


  describe("#updateFood", function(){
    it("generates food rect", function () {
      spyOn(food, 'randomCoor').and.returnValue("[3,4]")
      spyOn(food, 'drawFood')

      food.updateFood();
      expect(food.drawFood).toHaveBeenCalled();
      expect(food.randomCoor).toHaveBeenCalled();

    });


  });


  // describe("#drawFood", function(){
  //   it("should print food", function () {
  //     food.drawFood([3,4]);
  //     expect(food.foodCoor).toEqual([3,4]);
  //     expect(food.foodExists).toEqual(true);
  //
  //   });
  // });




});
