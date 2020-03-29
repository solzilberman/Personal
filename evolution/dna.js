class DNA {
    constructor(newgenes){
        if(newgenes){
            this.genes = newgenes;
        } else {
            this.genes = new Array(1);
            for(let i = 0; i < this.genes.length; i++){
                this.genes[i] = random(1);
            }
        }
    }

    copy(){
        var newgenes = new Array(this.genes.length);
        for(let i = 0; i < newgenes.length;i++){
            newgenes[i] = this.genes[i];
        }
        return new DNA(newgenes);
    }

    mutate(m){
        for(let i = 0; i < this.genes.length;i++){
            if(random(1) < m){
                this.genes[i] = random(0,1);
            }
        }
    }
}