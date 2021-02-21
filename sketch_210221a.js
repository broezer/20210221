const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;
let b1, b2, b3;
let t1, t2 , t3;

let cols, rows;
let scl = 25;
let w = 1600;
let h = 1600;

let flying = 0;

let terrain = [];



function setup() {
   createCanvas(400, 400, WEBGL);
   
   
   c1 = color(255, 251, 200);
   c2 = color(242, 218, 255);
   c3 = color(15, 255, 221);
   
   b1 = color(13,28, 33);
   b2 = color(10,30, 30);
   b3 = color(255, 28, 43);

   
   
   cols = w / scl;
   rows = h / scl;

   
   
}


function draw() {

  push();
  translate(0, 0, -1000);
  
  setGradient(-width*2, height * -2 , width * 4, height * 2, b1, b2, c3, Y_AXIS);
  setGradient(-width*2,0, width * 4, height *4, c3, b2, b1,Y_AXIS);
  pop();

  push();
  rotateX(radians(45))
  translate(0, height* 0.1, width/2);
  for (let i = 0; i < 10; i++) {
    rotateZ(radians(45 * i));
    translate(0, 0, -width/5 * i);
    setPattern();
  }
  pop();

  //setPattern();

  translate(0,height * 0.5, -600);
  rotateX(PI/3);
  translate(-w / 2,  0 , width * - 0.2);
  
  
  for (let y = 0; y < rows - 1; y++) {
    for (let x = 0; x < cols; x++) {
      fill(b1);
      stroke(c3);
      rect(x*scl, y*scl, scl, scl);
    }
  }
  
  pop(); 
  
  
  //save("20210221.png");
  noLoop();
  
  
}

function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(x, i, x + w, i);
      
      if ( i <= (y + h) - ((h/2))){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      }
      
      
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x,(x + w) - (w/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (x + w) - (w/2), x + w, 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(i, y, i, y + h);
      if ( i <= (x + w) - (w/2)){
        stroke(c);
        line(i, y, i, y + h);
      }else{
        stroke(p);
        line(i, y, i, y + h);
      }
      
    }
  }
}

function setPattern(){

push();
   translate(width * 0.27,height * -0.3);
   for (let y = 0; y < 9 - 1; y++) {
    for (let x = 0; x < 1; x++) {
        fill(b1);
        stroke(c3);
        rect(x*scl, y*scl, scl, scl);
      }
  }  
  pop();

  push();
   translate(width * 0.17,height * -0.3);
   for (let y = 0; y < 9 - 1; y++) {
    for (let x = 0; x < 1; x++) {
        fill(b1);
        stroke(c3);
        rect(x*scl, y*scl, scl, scl);
      }
  }  
  pop();


  push();
   translate(width * 0.07,height * -0.3);
   for (let y = 0; y < 9 - 1; y++) {
    for (let x = 0; x < 1; x++) {
        fill(b1);
        stroke(c3);
        rect(x*scl, y*scl, scl, scl);
      }
  }  
  pop();


  push();
   translate(width * -0.03,height * -0.3);
   for (let y = 0; y < 9 - 1; y++) {
    for (let x = 0; x < 1; x++) {
        fill(b1);
        stroke(c3);
        rect(x*scl, y*scl, scl, scl);
      }
  }  
  pop();

  push();
   translate(width * -0.13,height * -0.3);
   for (let y = 0; y < 9 - 1; y++) {
    for (let x = 0; x < 1; x++) {
        fill(b1);
        stroke(c3);
        rect(x*scl, y*scl, scl, scl);
      }
  }  
  pop();

  push();
   translate(width * -0.23,height * -0.3);
   for (let y = 0; y < 9 - 1; y++) {
    for (let x = 0; x < 1; x++) {
        fill(b1);
        stroke(c3);
        rect(x*scl, y*scl, scl, scl);
      }
  }  
  pop();

  push();
   translate(width * -0.33,height * -0.3);
   for (let y = 0; y < 9 - 1; y++) {
    for (let x = 0; x < 1; x++) {
        fill(b1);
        stroke(c3);
        rect(x*scl, y*scl, scl, scl);
      }
  }  
  pop();


}