var angle = 0;
var slider;
var hu;
function setup(){
    createCanvas(400,400);
    slider = createSlider(0,HALF_PI, PI / 4, .01);
    slider.position(25,425);
    colorMode(HSB)
    hu = 50;    

}

function draw() {
    background(51);
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text('Fractal Tree',200,50);



    angle = slider.value();
    translate(width/2,height);
    branch(100, hu);
    
}

function branch(len, col) {
    if(len < 4){
        return;
    }
    stroke(col, 255,255);
    line(0, 0, 0,- len);
    translate(0,-len);
    push();
    rotate(angle);
    branch(len*.67, col+30);
    pop();
    push();
    rotate(-angle);
    branch(len*.67, col+30);
    pop();
}