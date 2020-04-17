var mic;

 function setup(){
  var cnv = createCanvas(100, 100);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  background(0);
  fill(255);
  text('tap to start', width/2, 20);

  micLevel = mic.getLevel();
  var y = height/2 - micLevel * height;
  ellipse(width/2, y, 20, 10);
}

