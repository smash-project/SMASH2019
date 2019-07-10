

function setup(){

    let canvas = createCanvas(1000,500);
    canvas.parent('canvas');
    
}
function draw() {
    
    fill(255,0,0);
    stroke(255,0,0);
    strokeWeight(4);
    ellipse(500,250,400);
    
    noFill();
    stroke(255,255,255);
    strokeWeight(50);
    ellipse(500,250,160);
    
    stroke(255,255,255);
    strokeWeight(50);
    line(422,20,420,245);
    
    }