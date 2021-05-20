const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,ground,ball;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var ground_option = {
    'isStatic':true
  }
  ground = Bodies.rectangle(200,390,200,50,ground_option);
  World.add(world,ground);
  var ball_options ={ restitution: 1.0 } 
  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world,ball);
}
function draw() {
  background("black");  
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,50,50);
  ellipseMode(RADIUS); 
  ellipse(ball.position.x, ball.position.y, 20, 20);
}