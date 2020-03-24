function Square(heightSquare,startX) {
    this.heightSquare = heightSquare;
    this.startX = startX;

    this.show = function() {
        fill(255);
        rect(this.startX, this.heightSquare, wid, height-this.heightSquare);
    }

    this.update = function(x){
        //change x tp i+1;
        fill(255,0,0);
        rect(this.startX, this.heightSquare, wid, height-this.heightSquare);
        this.heightSquare = x; 
    }
}