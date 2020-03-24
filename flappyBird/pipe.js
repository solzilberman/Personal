function Pipe() {
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 20;
    this.speed = 2;
    this.highlight = false;

    this.hits = function(bird) {
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.highlight = true;
                return 1;
            }
        }
        return 0;
    }
   
    this.show = function (){
        fill(255);
        if (this.highlight == true) {
            fill(255,0,0);
        }
        rect(this.x, 0,this.w,this.top);
        rect(this.x, height - this.bottom,this.w,this.bottom);
    }

    this.update = function() {
        this.x -= this.speed;
    }

    this.offscreen = function() {
        return this.x < -this.w;
    }
}