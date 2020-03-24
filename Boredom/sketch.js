let arr = [];
let player;
function setup(){
    createCanvas(800, 600);
    background(0);
    for(i = 0; i < 100; i++){
        m = new block(random(width), -5);
        arr.push(m);
    }
    player = new Player();
    
    
}
count = 0;
lvl = 0;
function draw() {
    background(0)
    for(i = 0; i < lvl; i++){
        arr[i % arr.length].drop();
        arr[i % arr.length].show();
    }
    fill('grey');
    rect(0,height,width,-50);
    player.show();
    if(mouseX > player.x){
        player.update((mouseX-player.x)*.02)
    }
    if(mouseX < player.x){
        player.update((mouseX-player.x)*.02)
    }
    player.checkHit(arr);

    if(count% 40 == 0 && count > 39){
        lvl+=1;
    }
    count+=1
    textSize(24)
    textAlign(LEFT)
    fill('white')
    text("Level: " + lvl,15,580)
}


