describe("controls", function () {
  var snake;
  var current_position;
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
          if (current_position[0] != snake.head()[0]){
            current_position = snake.head();
            move('up');
          }
        }
      break;
      case 40:
        if(snake.direction != 'up'){
          if (current_position[0] != snake.head()[0]){
            current_position = snake.head();
            move('down');
          }
        }
      break;
      case 37:
        if(snake.direction != 'right'){
          if (current_position[1] != snake.head()[1]){
            current_position = snake.head();
            move('left');
          }
        }
      break;
      case 39:
        if(snake.direction != 'left'){
          if (current_position[1] != snake.head()[1]){
            current_position = snake.head();
            move('right');
          }
        }
      break;
    }
  }

  function move(direction){
    snake.direction = direction;
  }

  beforeEach(function () {
    snake = new Snake();
    current_position = snake.head();
    snake.move(snake.head());
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
    snake.move(snake.head());
    control("ArrowUp", 38);
    doKeyDown(e);
    expect(snake.direction).toEqual('up');
  });

  it("moves down when down arrow key is pressed", function () {
    control("ArrowRight", 39);
    doKeyDown(e);
    snake.move(snake.head());
    control("ArrowDown", 40);
    expect(snake.direction).toEqual('down');
  });

  it("cannot reverse direction", function () {
    control("ArrowUp", 38);
    expect(snake.direction).toEqual('down');
  });

  it("cannot turn on itself", function () {
    control("ArrowRight", 39);
    doKeyDown(e);
    control("ArrowDown", 40);
    expect(snake.direction).toEqual('right');
  });
});
