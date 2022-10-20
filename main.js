var Ball = function() {
    this.x = 300;
    this.y = 250;
    this.xSpeed = (Math.random() * 10) - 3;
    this.ySpeed = (Math.random() * 10) - 3;
};

var circle = function(x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

function color() {
    let colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Black", "Violet"];
    return colors[Math.floor(Math.random() * colors.length)];

}



Ball.prototype.draw = function() {
    circle(this.x, this.y, 9, true);
    ctx.fillStyle = color();
};

Ball.prototype.move = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function() {
    if (this.x <= 0 || this.x >= width) {
        this.xSpeed = -this.xSpeed;
    }
    if (this.y <= 0 || this.y >= height) {
        this.ySpeed = -this.ySpeed;
    }
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.shadowColor = "red";
ctx.shadowOffsetX = 3;
ctx.shadowOffsetY = 3;
ctx.shadowBlur = 5;
ctx.globalAlpha = 0.7;
var width = canvas.width;
var height = canvas.height;

var balls = [];
for (var i = 0; i < 21; i++) {
    balls[i] = new Ball();
}

setInterval(function() {
    ctx.clearRect(0, 0, width, height);

    for (var i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].move();
        balls[i].checkCollision();
    }

    ctx.strokeRect(0, 0, width, height);
}, 5);