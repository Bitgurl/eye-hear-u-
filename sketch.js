let eye;

var mic;

function setup() {
  createCanvas(600,420);
  eye = loadImage('eye1.png');
  mic = new p5.AudioIn ();
  mic.start();
 
}

function draw() {
  var vol = mic.getLevel();
  image(eye,100,vol*600);
  console.log(vol);
  
 
}