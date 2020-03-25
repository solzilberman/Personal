let n = 0;
let c = 5;
function setup(){
    createCanvas(500,500);
    angleMode(DEGREES);
    colorMode(HSB);
    background(0)
}
k= 0;
function draw(){
    var a = n * 137.5;
    var r = c * sqrt(n);

    var x = r * cos(a) + width/2;
    var y = r * sin(a) + height/2;
    fill(k%255, 255,255);
    noStroke();
    ellipse(x,y,4,4);
    n+=1;
    k+=1
}