let size, level;

function preload(){
  sound = loadSound('assets/beat.mp3');
}

function setup() {
  let cnv = createCanvas(displayWidth, displayHeight);
  cnv.mouseClicked(toggleSound);
  amplitude = new p5.Amplitude();
}

function draw() {
  background(0);
  textAlign(CENTER);
  text('Clique para tocar', width/2, 20);

  level = amplitude.getLevel();
  size = map(level, 0, 1, 0, 200);
  noFill();
  strokeWeight(0.5);
  stroke(255);
  if(keyPressed()) {
    ellipses();
  } else {
    mixedForms();
  }
}

function toggleSound(){
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  }
}



function ellipses() {
  for(let i = 0; i < width; i += 100 ) {
    for(let j = 0; j < height; j += 50){
      ellipse(i, j, size, size);
    }
  } 
}

function quads() {
  for(let i = 0; i < width; i += 100 ) {
    for(let j = 0; j < height; j += 50){
      rect(i, j, size, size);
    }
  }
}
function randomQuads() {
  for(let i = 0; i < width; i += 100 ) {
    for(let j = 0; j < height; j += 50){
      rect(i+random(10), j+random(5), size, size);
    }
  }
}

function mixedForms() {
  for(let i = 0; i < width; i += 100 ) {
    for(let j = 0; j < height; j += 50){
      if(i % 2 == 0) {
        rect(i+random(10), j+random(5), size, size);
      } else {
        ellipse(i+random(100), j+random(50), size, size); 
      }
      
    }
  }
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
     quads();
  } else if (keyCode === DOWN_ARROW) {
    ellipses();
    console.log("teste"); 
  } else if (keyCode === LEFT_ARROW) {
    randomQuads();
  } else if (keyCode === RIGHT_ARROW) {
     mixedForms();
  }

  return false; // prevent default
}
