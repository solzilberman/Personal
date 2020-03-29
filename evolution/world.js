class World{
    constructor(num) {
        this.bloops = [];
        for(let i =0; i < num; i++){
            let dna = new DNA(null);
            let bloop = new Bloop(null, dna);
            this.bloops.push(bloop);
        }
        this.food = new Food(num);
    }

    run() {
        this.food.display();
        for(let i = this.bloops.length -1; i >= 0; i--){
            let b = this.bloops[i];
            b.run();
            b.eat(this.food);

            if(b.checkDead()){
                this.bloops.splice(i,1);
                this.food.add(b.location);
            }

            let baby = b.reproduce();
            if(baby != null){
                this.bloops.push(baby);
            }
        }
    }
}