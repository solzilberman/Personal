function Player(){
    this.x = width/2;
    this.y = height-50;
    this.col = [255,134,134]
    this.show = function() {
        fill(this.col);
        rect(this.x,this.y, 25, -25);
    }
    this.update = function(xVal) {
        this.x += xVal;
    } 
    this.checkHit = function(arr) {
        for(i = 0; i < arr.length; i++){
            if(arr[i].x > this.x && arr[i].x < this.x + 25 && arr[i].y < this.y && arr[i].y > this.y - 25){
                this.col = 'orange';
                console.log("HIT");
                noLoop();
                textSize(55);
                fill('red')
                text("GAME OVER YOU LOSE", width/2, height/2);
            }
        }
    }
}