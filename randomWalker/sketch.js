let w;
function setup(){
    createCanvas(500,500);
    background(0);
    w = new Walker();
}

function draw(){
    w.show();
    w.walk();
}

function Walker() {
    this.x = width/2;
    this.y = height/2;

    this.show = function(){
        stroke(255);
        fill(255);
        point(this.x, this.y);
    }

    this.walk = function() {
        //4 options, up down left right
        n = floor(random(0,4));
        //up
        if(n == 0){
            this.y -= 2;
        }
        //down
         else if(n == 1){
            this.y += 2;
        }
        //left
        else if(n == 2){
            this.x -= 2;
        } 
        //right
        else if(n == 3){
            this.x += 2;
        }
    }
}

