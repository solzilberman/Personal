function Star() {
    this.x = random(-width,width);
    this.y = random(-height,height);
    this.speed = random(width);
    this.updateX;
    this.updateY;

    this.show = function() {
        stroke(255);
        this.updateX = map(this.x/this.speed,0,1,0,width);
        this.updateY = map(this.y/this.speed,0,1,0,height);
        this.r = map(this.speed,0,width,16,1);
        ellipse(this.updateX, this.updateY, this.r, this.r);
    }

    this.update = function() {
        this.speed -= speedSlide;
        if (this.speed < 1) {
            this.speed = width;
            this.x = random(-width,width);
            this.y = random(-height,height);
        }
    }
}