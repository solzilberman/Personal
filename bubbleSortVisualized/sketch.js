var squares = []
var wid = 5;
var numElem = 250;
var randomVals = []
var comp = 0;
function setup(){
    createCanvas(750, 500);
    
    count = 0;
    for (i = 0; i < numElem; i++){
        randomVals[i] = random(height-50);
        squares[i] = new Square(randomVals[i],count);
        count+=5;
    }
}

function draw(){
    background(0);
    
    // draw each square
    textSize(32);
    fill(255);
    text('Bubble Sort', 50, 50);
    for (i =0; i < numElem;i++){
        squares[i].show();
    }
    // sort array 
    sortSquares()
    
}

function sortSquares() {
    for (i = 0; i < numElem-1;i++){
        comp++;
        if (randomVals[i] < randomVals[i+1]) {
            temp = randomVals[i];
            randomVals[i] = randomVals[i+1];
            randomVals[i+1] = temp;
            squares[i].update(randomVals[i]);
            squares[i+1].update(randomVals[i+1]);
        
        }
    }
}



