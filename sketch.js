/* Bodies, World and Engine*/

const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ball;
var ground;
var wedge;
var angle = 60;
var wall;
function setup() {

    createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    var ballOptions = {
        restitution: 0.95,
        frictionAir: 0.01
    }

    ball = Bodies.circle(100,10, 20, ballOptions);
    World.add(world, ball);

    var groundOptions = {
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20, groundOptions);
    World.add(world,ground);

    var wedgeOptions = {
        isStatic : true
    }

    wedge = Bodies.rectangle(100,200,100,20,wedgeOptions);
    World.add(world,wedge);

    wall = Bodies.rectangle(300,150,70,10,groundOptions);
    World.add(world,wall);

    console.log(ball);
}

function draw() 
{
 background(0); 
 Engine.update(engine);

 ellipseMode(RADIUS);
 ellipse(ball.position.x, ball.position.y, 20,20);
 
 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,20);

 Matter.Body.rotate(wedge,angle);
 push();
 translate(wedge.position.x, wedge.position.y);
 rotate(angle);
 rect(0,0 ,150,20);
 pop();

 angle = angle+0.1;

 rect(wall.position.x,wall.position.y,70,10);
 
}

