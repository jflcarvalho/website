var colors = ["#0000e0", "#c200ff", "#0000ff", "#6000ff", "#00baff", "#00008c"];
var layer1ProbOfHidden = 3;
var layer2probOfHidden = 10;
var layer3probOfHidden = 20;
var rectangleSize = 25;


function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.canvas.width = document.getElementById('canvas').clientWidth;
    ctx.canvas.height = document.getElementById('canvas').clientHeight;

    var tableX = ctx.canvas.width/rectangleSize;
    var tableY = ctx.canvas.height/rectangleSize;

    for (let x = 0; x < tableX - 1; x++) {
      for (let y = 0; y < tableY - 1; y++) {
        let xPostition = x * rectangleSize;
        let yPostition = y * rectangleSize;

        var rand = Math.trunc(Math.random() * (colors.length + layer1ProbOfHidden));

        if (rand < colors.length){
          ctx.fillStyle = colors[rand];
          ctx.fillRect(xPostition, yPostition, rectangleSize, rectangleSize);
        }
      }
    }

  }
}