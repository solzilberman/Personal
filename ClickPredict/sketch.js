let model;
let targetLabel = 'A';
let state = 'collection'
function setup(){
    createCanvas(400,400);
    noFill();
    stroke(0);
    rect(0,0,width,height);
    let options = {
        inputs: ['x', 'y'],
        outputs: ['label'],
        task: 'classification',
        debug: true,
    };
    model = ml5.neuralNetwork(options);
}

function finishedTraining(){
    state = 'prediction';
    console.log("Finished Training Model!!!")
}

function whileTraining(epoch, loss) {
    //console.log(epoch);
}

function keyPressed() {
   
    if(keyCode == ENTER){
        state = 'training';
        console.log('Starting training...');
        model.normalizeData();
        let options  = {
            epochs: 200,
        };
        model.train(options, whileTraining, finishedTraining);
    } else {
        targetLabel = key.toUpperCase();
    }

}
function mousePressed() {

    let inputs = {
        x: mouseX,
        y: mouseY,
    };
    if(state == 'collection'){
        let target = {
            label: targetLabel,
        };
        model.addData(inputs, target);
        stroke(0);
        noFill();
        ellipse(mouseX, mouseY, 24);
        fill(0);
        textAlign(CENTER,CENTER);
        text(targetLabel, mouseX, mouseY);
    } else if(state == 'prediction'){
        model.classify(inputs, gotResults);
    }
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
        return;
    }
    stroke(0);
    fill(0,0,255,100);
    ellipse(mouseX, mouseY, 24);
    fill(0);
    textAlign(CENTER,CENTER);
    text(results[0].label, mouseX, mouseY);
    console.log(results);
}

