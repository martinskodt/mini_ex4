var x = 800;
var y = 600;
var speed = 20;
var score = 0;
var barscore;
var barstop=-750;
var stage ={
 w : 1400,
 h : 780,
 img : 0,
}
var winimg = 0;

function preload(){
 stage.img = loadImage("assets/ohh.jpg")
 winimg = loadImage("assets/all.jpg")
}
function setup() {
createCanvas(1600,900)
 frameRate(60);
 imageMode(CORNERS)
}

function draw() {
//Y=780 X=1400 end of picture
background(30,100)
//Stage /Billede

if(score >=500){
image(winimg,200,150,stage.w,stage.h)
} else {
image(stage.img,200,150,stage.w,stage.h) 
}
//Bar
push
noFill();
stroke(200);
rect(75,height-50,50,-750);
pop
fill(0,200,0)
rect(75,height-50,50,barscore)
barscore = map(score,0,500,0,-750)
if (score >= 500){
 barscore = barstop
}

//Text
push()
fill(255)
textSize(40)
text("Score",1300,60)
text(score,1500,60)
pop()
//Ball
 fill(200,0,0); noStroke();
 ellipse(x,y,30,30)
//bevægelse 
x = x + random(-speed,speed);
y = y + random(-speed,speed);
 //y -= 10; //test funktion
//grænser
if (x >= (stage.w) || x <= 200 || y >=(stage.h) || y <= 150) {
 x = random(width/4,width*(3/4));
 y = random(height/4,height*(3/4)); 


//hitbox (mouse)
} 
if (mouseIsPressed){
 noStroke()
 fill(50,70,120)
 ellipse(mouseX,mouseY, 30,30)
 
 if ((mouseX+15) >= (x-15) && (mouseX-15) <= (x+15) && (mouseY+15) >= (y-15) && (mouseY-15) <= (y+15) ){
  score = score +1
  noLoop;
 }
}
}

