var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 
var sound;
//numbers
var one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve;
var bg;

//loading images
function preload(){
one=loadImage("1.png")
two=loadImage("2.png")
three=loadImage("3.png")
four=loadImage("4.png")
five=loadImage("5.png")
six=loadImage("6.png")
seven=loadImage("7.png")
eight=loadImage("8.png")
nine=loadImage("9.png")
ten=loadImage("10.png")
eleven=loadImage("11.png")
twelve=loadImage("12.png")
bg=loadImage("bg.jpg")


 
}
function setup(){
    createCanvas(400,400); 

    angleMode(DEGREES);   
}

function draw(){
    background(bg);
   


  //position for nimbers  
image(one,300,60,10,20)
image(two,350,120,15,20)
image(three,360,200,15,20)
image(four,340,280,15,20)
image(five,280,343,15,20)
image(six,200,360,15,20)
image(seven,100,345,15,20)
image(eight,45,300,15,20)
image(nine,20,200,15,20)
image(ten,30,120,20,15)
image(eleven,80,50,15,20)
image(twelve,200,15,20,15)


 translate(200,200)
    rotate(-90)


    hr = hour();
    mn = minute();
    sc = second();


    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

   
    push();
    rotate(scAngle); 
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()


    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    
    strokeWeight(10);
    noFill();
   
    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);
   
    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);
    
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);
}