var centerX;
var centerY;
var b2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //initialize variables
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;
    b2 = new bob();
    b2.x = 40;
}

function draw() {
    ellipse(centerX, centerY, 50, 50);
    var b1 = new bob();
    b1.display();
    b2.moveBob();
    b2.display();
}

function bob() {

    this.x = 200;
    this.y = 100;
    this.moveBob = function() {
        this.x++;
    }
    this.display = function() {
        ellipse(this.x, this.y, 60, 60);
    }

}