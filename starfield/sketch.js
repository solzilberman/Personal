var stars = [];
var population = 200;
var speedSlide;
let slider;

function setup(){
    createCanvas(500, 500);
    for (i = 0; i < population; i++){
        stars.push(new Star());
    }
    slider = createSlider(5,25,10,1);
    slider.position(10,450);
}

function draw() {
    background(0);
    translate(width/2,height/2);
    speedSlide = slider.value();

    for (i = 0; i < population; i++){
        stars[i].show();
        stars[i].update();
    }
}