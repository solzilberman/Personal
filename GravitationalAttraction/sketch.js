let movers = [];
let a;
let planetCount = 8;
const WIDTH = 500;
const HEIGHT = 500;
function setup(){
    createCanvas(WIDTH,HEIGHT);
    for(i = 0; i < planetCount; i++){
        movers.push(new Mover(random(2,5),random(WIDTH),random(HEIGHT)))
    }
    m = new Mover(2,400,400)
    a = new Attractor(40)
}

dots = []
function draw(){
    background(0);
    a.display()
    for(i = 0; i < planetCount; i++){
        dir = a.attract(movers[i])
        movers[i].applyForce(dir)
        movers[i].update()
        movers[i].display()
    }
    
}