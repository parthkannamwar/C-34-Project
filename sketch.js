const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render =Matter.Render 

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground,bgimg,bg,bg2;

function preload() {
 
  bg2 = loadImage("gamingbackground1.jpg");

}

function setup() {
  createCanvas(2000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 750, 1500, 20);

  clark = new Hero(400,800,250);
  rope = new Rope(clark.body, { x: 300, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 600, 70, 70);
  box2 = new Box(670, 600, 70, 70);
  box3 = new Box(740, 600, 70, 70);
  box4 = new Box(810, 600, 70, 70);
  box5 =  new Box(600,520,70,70);
  box6 =  new Box(670,520,70,70);
  box7 =  new Box(740,520,70,70);
  box8 =  new Box(810,520,70,70);
  box9 =  new Box(600,440,70,70);
  box10 =  new Box(670,440,70,70);
  box11 =  new Box(740,440,70,70);
  box12=  new Box(810,440,70,70);
  box13=  new Box(600,360,70,70);
  box14 =  new Box(670,360,70,70);
  box15 =  new Box(740,360,70,70);
  box16=  new Box(810,360,70,70);
  box17=  new Box(600,280,70,70);
  box18 =  new Box(670,280,70,70);
  box19 =  new Box(740,280,70,70);
  box20=  new Box(810,280,70,70);
  box21=  new Box(600,200,70,70);
  box22 =  new Box(670,200,70,70);
  box23 =  new Box(740,200,70,70);
  box24=  new Box(810,200,70,70);
  box25 =  new Box(635,120,70,70);
  box26 =  new Box(705,120,70,70);
  box27=  new Box(775,120,70,70);
  box28 =  new Box(670,40,70,70);
  box29=  new Box(740,40,70,70);
  box30=  new Box(705,-40,70,70);


  var render=Render.create({
    element: document.body,
    engine: engine,
    options: {  width:width,
                      height:height,
        wireframes:false }
   }
                  )

Render.run(render)	;
  

}

function draw() {

  getTime();
  background(bg2)

  Engine.update(engine);


  

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  

  

  clark.display();
  rope.display();
  monster.display();

}

function mouseDragged()
{
  Matter.Body.setPosition(clark.body,{x:mouseX,y:mouseY})
}

async function getTime()
{
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON= await response.json();
  var dt=responseJSON.datetime
  var hour=dt.slice(11,13)

  if(hour>=6 && hour<=19)
  {
    bg2=loadImage("gamingbackground2.png")
  }


 
}