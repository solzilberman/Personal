class Food {
    constructor(n) {
        this.size = 5;
        this.food = [];
        for(let i =0; i < n; i++){
            let temp = createVector(random(width), random(height))
            this.food.push(temp);
        }
    }

    display() {
        fill(255,102,102);
        stroke(255,102,102);
        for(let i =0; i < this.food.length; i++){
            rect(this.food[i].x, this.food[i].y, this.size, this.size);
        }

        if(random(1) < .01){
            let temp = createVector(random(width), random(height))
            this.food.push(temp);
        }
    }

    getFood() {
        return this.food;
    }

    add(loc){
        let temp = createVector(loc.x, loc.y);
        this.food.push(temp);
    }
}