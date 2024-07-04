function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('canvas-container');
}

function draw() {
    background(220);
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 50, 50);
}
