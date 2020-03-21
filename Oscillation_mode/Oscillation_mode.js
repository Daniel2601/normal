
let r1 = 100;
let r2_constant = 30;
let precision = 101;
let cx;
let cy;
let a = 5;
let t, r, x0, y0, x1, y1;
let time = 0;
let speed = 0.05;
let slider;
 
function setup() {
  slider = createSlider(2, 10, 3, 1);
  slider.position(100, 10);
  slider.style('width', '80px');

    createCanvas(400, 400);
    cx = width / 2;
    cy = height / 2;
   // myMovie = new Movie(this, "totoro.mov");
    //myMovie.loop();
}

function draw() {
  background(255);
  textSize(32);
  
  fill(0, 102, 153);

  time=time+1.01;
  var r2_mobile = r2_constant * cos( 2*PI*time*speed);
  t = radians(0);
  r = r1 + cos(t*a) * r2_mobile;
  x0 = cx + r * cos(t);
  y0 = cy + r * sin(t);
  //prvarln("time="+time+"r2_mobile="+r2_mobile);
  a = slider.value();
  text(a, 10, 40);
  //println(a);


  for (var i = 1; i <= precision; i++) {
        t = 2*PI*i/precision;
        r = r1 + cos(t*a) * r2_mobile;
        x1 = cx + r * cos(t);
        y1 = cy + r * sin(t);
        line(x0, y0, x1,y1);
        x0 = x1;
        y0 = y1;
    }
    //saveFrame("frames/####.tif");
}
