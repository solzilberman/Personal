function block(x, y) {
    this.x = x
    this.y = y
    this.v = random(1,2)
    this.a = 1.02
    this.size =random(5,18);
    this.show = function(){
        textSize(this.size);
        textAlign(CENTER);
        fill(255);
        text('BORED', this.x, this.y);
    }

    this.drop = function(){
        this.y += this.v;
        this.v *= this.a;
        if(this.y > height){
            this.y = -5
            this.x = random(width)
            this.v = random(1,2)
        }
    }

}