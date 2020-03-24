let a = 10;
let b = 8.0 / 3.0;
let p = 28;
let alph;

let x = .01;
let y = 0;
let z = 0;
let points = new Array();
function setup() {
    createCanvas(800,600, WEBGL);
    colorMode(HSB);
}

let angle = 0;
function draw() {
    background(0); 

    let dt = .01;
    let dx = (a * (y - x)) * dt;
    let dy = (x * (p - z) - y) * dt;
    let dz = ((x * y) - (b * z)) * dt;

    x = x + dx;
    y = y  + dy;
    z = z + dz;

    points.push(new p5.Vector(x,y,z));

    translate(0,0,-80);
    scale(4);
    stroke(255);
    noFill();

    let hu = 0;
    beginShape(POINTS);
    for(i = 0; i < points.length; i++){
        stroke(hu, 255, 255);
        vertex(points[i].x, points[i].y, points[i].z);
        if(hu > 255){
            hu = 0;
        }
        hu +=1;
    }
    endShape(CLOSE);
    angle += .001;
    
}