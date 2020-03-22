
let r1 = 100;
let r2_constant = 30;
let precision = 101;
let cx;
let cy;
let a = 5;
let t, r, x0, y0, x1, y1;
let time = 0;
let speed = 0.05;
let slider1,slider2;
let y_slider_position = 20;
function setup() {
  slider1 = createSlider(2, 15, 3, 1);
  slider1.position(100, y_slider_position);
  slider1.style('width', '80px');
  
  slider2 = createSlider(0, 0.1, 0.05, 0.001);
  slider2.position(200, y_slider_position);
  slider2.style('width', '80px');

    createCanvas(400, 400);
    cx = width / 2;
    cy = height / 2;
}

function draw() {
  background(255);
  textSize(32);
  a = slider1.value();
  fill(0, 102, 153);
  text(a, 60, y_slider_position+10);
  textSize(16);
  text("Speed",200, y_slider_position - 5);
  text("Mode",100, y_slider_position - 5);
  speed = slider2.value();
  time=time+1.01;
  var r2_mobile = r2_constant * cos( 2*PI*time*speed);
  t = radians(0);
  r = r1 + cos(t*a) * r2_mobile;
  x0 = cx + r * cos(t);
  y0 = cy + r * sin(t);
  //prvarln("time="+time+"r2_mobile="+r2_mobile);

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
