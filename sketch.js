
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

var block8,block9,block10,block11,block12,block13,block14,block15,block16,block1,block2

var ground
var con1 

var poly


function preload()
{
	
} 

function setup() {
	createCanvas(1300, 400);
    

	engine = Engine.create();
    world = engine.world;

    //tower 1

    block1= new box(520,245,30,40)  
    block2= new box(550,245,30,40)
    block3= new box(580,245,30,40)
    block4= new box(610,245,30,40)
    block5= new box(640,245,30,40)
    block6= new box(670,245,30,40)
    block7= new box(700,245,30,40)

    block8= new box(550,235,30,40)
    block9= new box(580,235,30,40)
    block10= new box(610,235,30,40)
    block11= new box(640,235,30,40)
    block12= new box(670,235,30,40)

    block13= new box(580,195,30,40)
    block14= new box(610,195,30,40)
    block15= new box(640,195,30,40)

    block16= new box(610,155,30,40)

    //tower 2 
    block17= new box(1005,206,30,40)
    block18= new box(1033,205,30,40)
    block19= new box(1060,205,30,40)
    block20= new box(1093,205,30,40)
    block21= new box(1120,205,30,40)

    block22=new box(1033,180,30,40)
    block23=new box(1060,155,30,40)
    block24=new box(1093,120,30,40)

    block25= new box(1062,120,30,40)

   

    //grounds
    ground1= new Ground(600,350,250,10)
    ground2= new Ground(1060,210,210,10)

    poly= new polygon(130,190,40)

    con1=new slingShot(poly.body,{x:130,y:190}); 


    Engine.run(engine);
}
function draw(){

    background(56,44,44)

    fill("white")
    textSize(25)
    text("Drag the hexagon to release it, and launch towards the blocks",300,60)

    fill("skyblue")
     block1.display()
     block2.display()
     block3.display()
     block4.display()
     block5.display()
     block6.display()
     block7.display()
    
     fill("pink")
     block8.display()
     block9.display()
     block10.display()
     block11.display()
     block12.display()
     
     fill("turquoise")
     block13.display()
     block14.display()
     block15.display()

     fill("grey")
     block16.display()
     
     fill("skyblue")
     block17.display()
     block18.display()
     block19.display()
     block20.display()
     block21.display()

     fill("turquoise")
     block22.display()
     block23.display()
     block24.display()
     
     fill("pink")
     block25.display()
     
     fill("brown")
     ground1.display()
     ground2.display()

     poly.display()

     con1.display()

}
function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    con1.fly();
}
function keyPressed(){
   if(keyCode===32){
       con1.attach(poly.body)
   }

}