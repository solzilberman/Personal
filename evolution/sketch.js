let world;
let bagel = 0;
let days = 0;
function setup(){
    let canvas = createCanvas(800,600);
    canvas.position(15, 5);
    world = new World(10);
}

function draw(){
    background(105, 130,255);
    world.run();

    fill(255);
    textSize(18);
    strokeWeight(1);
    noStroke();
    text("Population: " + world.bloops.length, 35,50);
    let sum = 0; 
    let speedSum = 0;
    for(let i =0; i < world.bloops.length;i++){
        sum += world.bloops[i].r;
        speedSum += world.bloops[i].maxspeed;
    }
    avg = floor(sum / world.bloops.length);
    avgSpeed = floor(speedSum/ world.bloops.length);
    text("Avg Size: " + avg, 35,75);
    text("Avg Speed: " + avgSpeed, 35,100);
    text("Day no. " + floor(days / 225), 35,125);
    days+=1;

    
    
}