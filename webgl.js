var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;

var colors = {0:"red",
              1:"blue",
              2:"green",
              3:"aqua",
              4:"crimson",
              5:"chartreuse",
              6:"deeppink",
              7:"indigo",
              };
var i = 0;
var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 30,
  color: colors[0],
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};



function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vx *= .995;
  ball.vy *= .99;
  ball.vy += .25;
  
  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
   ball.vx = -ball.vx;
  }
  
  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('dblclick', function(e) {
  i = (i+1)%8;
  ball.color = colors[i];
});

canvas.addEventListener('click', function(e) {
  ball.vy -= 10;
  ball.vx -= Math.floor(Math.random() * 8);
});

raf = window.requestAnimationFrame(draw);
ball.draw();
