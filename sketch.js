var moving, fixed;

function setup() {
  createCanvas(400, 400);

  fixed = createSprite(200, 200, 50, 50);
  fixed.shapeColor = 'pink';
  moving = createSprite(150, 200, 100, 50);
  moving.shapeColor = 'pink';
  moving.debug = true;
  fixed.debug = true;
}

function draw() {
  background(0);
  moving.x = mouseX;
  moving.y = mouseY;
  if (moving.x - fixed.x < moving.width / 2 + fixed.width / 2 &&
    fixed.x- moving.x <moving.width / 2 + fixed.width / 2) {
    moving.shapeColor = 'red';
    fixed.shapeColor = 'red';
  } else {
    moving.shapeColor = 'pink';
    fixed.shapeColor = 'pink';
  }
  drawSprites();
}
/*
moving.width/2 + fixed.width/2
moving.x-fixed.x
*/