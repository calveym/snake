describe("controls", function () {
  var snake;
  var head;
  var e = new Event("keydown");

  function control(key, keyCode){
    e.key=key;
    e.keyCode=keyCode;
    e.which=e.keyCode;
    document.dispatchEvent(e);
  }

  function doKeyDown(evt){

    switch (evt.keyCode) {
      case 38:
      if(snake.direction != 'down'){
        snake.direction = 'up';
      }
      break;
      case 40:
      if(snake.direction != 'up'){
        snake.direction = 'down';
      }
      break;
      case 37:
      if(snake.direction != 'right'){
        snake.direction = 'left';
      }
      break;
      case 39:
      if(snake.direction != 'left'){
        snake.direction = 'right';
      }
      break;
    }
  }

  beforeEach(function () {
    snake = new Snake();
    head = snake.head();
    document.addEventListener('keydown', doKeyDown, true);
  });

  it("moves right when right arrow key is pressed", function () {
    control("ArrowRight", 39);
    doKeyDown(e);
    expect(snake.direction).toEqual('right');
  });

  it("moves left when left arrow key is pressed", function () {
    control("ArrowLeft", 37);
    doKeyDown(e);
    expect(snake.direction).toEqual('left');
  });

  it("moves up when up arrow key is pressed", function () {
    control("ArrowRight", 39);
    doKeyDown(e);
    control("ArrowUp", 38);
    doKeyDown(e);
    expect(snake.direction).toEqual('up');
  });

  it("moves down when down arrow key is pressed", function () {
    control("ArrowRight", 39);
    doKeyDown(e);
    control("ArrowDown", 40);
    expect(snake.direction).toEqual('down');
  });
});
