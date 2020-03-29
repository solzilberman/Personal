class Bloop{
    constructor(location, dna){
        
        this.location = createVector(random(width/2), random(height/2));

        this.dna = dna;
        this.health = 200;
        this.xoff = random(1000);
        this.yoff = random(1000);
        this.alive = true;

        this.maxspeed = map(this.dna.genes[0],0,1,10,0);
        this.r = map(this.dna.genes[0],0,1,0,65)
    }

    run() {

        this.update();
        this.borders();
        this.display();

    }

    display(){
        ellipseMode(CENTER);
        fill(this.health, 127);
        stroke(this.health, 255);
        ellipse(this.location.x, this.location.y, this.r, this.r)
    }

    update() {
        var vx = map(noise(this.xoff),0,1,-this.maxspeed,this.maxspeed);
        var vy = map(noise(this.yoff),0,1,-this.maxspeed,this.maxspeed);
        var vel = createVector(vx, vy);
        this.xoff += .01;
        this.yoff += .01;
        this.location.add(vel);
        this.health -= 0.2;
    }

    eat(f) {
        var foodF = f.getFood();
        for(let i = foodF.length -1; i >=0; i--){
            var foodLocation = foodF[i];
            if(foodLocation){
                let d = dist(this.location.x,this.location.y, foodLocation.x, foodLocation.y);
                if(d < this.r/2){
                    this.health += 100;
                    foodF.splice(i,1);
                }
            }
        }
    }

    borders() {
        if(this.location.x < 0){
            this.location.x = width-10;
        }
        if(this.location.y < 0){
            this.location.y = height-10;
        }
        if(this.location.x > width){
            this.location.x = 10;
        }
        if(this.location.y > height){
            this.location.y = 10;
        }
    }

    checkDead() {
        if(this.health < 0){
            return true;
        }
    }

    reproduce() {
        if(random(1) < .0005){
            let childDNA = this.dna.copy();
            childDNA.mutate(.1);
            let child = new Bloop(this.location, childDNA);
            return child;
        } else {
            return null;
        }
    }
}