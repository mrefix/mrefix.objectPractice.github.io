var centerX;
var centerY;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //initialize variables
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;
}

function draw() {
    ellipse(centerX, centerY, 50, 50);
}