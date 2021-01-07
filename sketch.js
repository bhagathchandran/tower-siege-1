const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3;
var polygon, slingshot,ground;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(810,350,70,70);
    box4 = new Box(810,260,70,70);

    box5 = new Box(700,240,70,70);
    box6 = new Box(920,240,70,70);
    box7 = new Box(810,220,70,70);

    box8 =  new Box(810,180,70,70);

    box9 = new Box(810,160,70,70);
    box10 = new Box(760,120,70,70);
    box11 = new Box(870,120,70,70);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    imageMode(CENTER);
    image(polygon.png,polygon.positionX,polygon.positionY,40,40)

    slingshot = new Slingshot(polygon.body,{x:100, y:200});
}

function draw(){
        background(255);
    
        
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.score();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.score();
    box10.display();
    box11.display();

    polygon.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY}); 
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}


