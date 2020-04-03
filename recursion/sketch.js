function setup(){
    createCanvas(500,500);
}
let x = 0;
function draw(){
    background(0);
    randomSeed(10);
    translate(width/2, height/2);
    rotate(PI / 4.0);
    drawCircle(0,0, 350);
}

function drawCircle(x, y, d){
    
    stroke(255);
    fill(random(127,255),random(127,255),random(127,255),85);
    ellipse(x, y, d/2);
    if(d > 32){
        drawCircle(x-(d/2), y, d/2);
        drawCircle(x+(d/2), y, d/2);
        drawCircle(x, y-(d/2), d/2);
        drawCircle(x, y+(d/2), d/2);
    }
 
    
}