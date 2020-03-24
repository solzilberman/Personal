let bug; // Declare object
let arr = [];
let len = 100;
var counter = 0


function setup() {
  createCanvas(710, 400);
  // Create object
  for(i = 0; i < len; i++){
    bug = new Jitter(255);
    arr.push(bug)  
  }
  for(i = 0; i < 25; i++){
    vir = new Jitter('red');
    arr.push(vir)  
  }
  
  frameRate(10)
 
 
}

function isRed(arr) {
    death = 0
    for(i = 0; i < arr.length; i++){
        if(arr[i].col == 'red'){
            death+=1
        }
    }
    if(death == arr.length || arr == []){
        noLoop()
        return true;
    } else {
        return false;
    }
}



function draw() {
    background(50, 89, 100);
    counter+=1


    for(i = 0; i < arr.length; i++){
        arr[i].move();
        arr[i].display();
        for(var j = 0; j < arr.length; j++){
            if(arr[i].intersects(arr[j])) {
                arr[i].changeColor()
                arr[j].changeColor()
            }
        }
    }
    fill('white')
    textSize(32)
    text(counter, 50,375)

    if(isRed(arr)){
        arr = []
        fill('white')
        textSize(32)
        n = counter
        text('Species Extinction in ' + n + ' Days', width/2-250,height/2)
    }
    
}

// Jitter class
class Jitter {
  constructor(col) {
    this.x = random(width);
    this.y = random(height);
    this.r = 5;
    this.speed = 25;
    this.col = col
  }

  changeColor() {
      this.col = 'red'
  }

  intersects(other) {
      var d = dist(this.x,this.y, other.x,other.y)
      if(d < this.r + other.r && other.col == 'red') {
          return true;
      } else {
          return false;
      }
  }

  move() {
    if(this.x < 0 || this.x > width){
        this.x = width/2
    }
    if(this.y < 0 || this.y > height){
        this.y = height/2
    }
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    fill(this.col)
    ellipse(this.x, this.y, this.r, this.r);
  }
}