let font;
let vehicles = [];

function preload(){
  font = loadFont('ZillaSlab-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
 
  let points = font.textToPoints('BRB Babes', 100, height/2, 250);
  
  
  for (let i = 0; i < points.length; i++){
    let pt   = points[i];
    let vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    
    // stroke(250, 200, 0);
    // strokeWeight(6);
    // point(pt.x, pt.y);
    
  }
  
}

function draw() {
  background(0);
  for (let i = 0; i < vehicles.length; i++){
    var v = vehicles[i];
    v.behaviours();
    v.update();
    v.show();
    
  }
   textFont(font);
  textSize(30);
  fill(255, 255, 0);
  noStroke();
  textAlign(CENTER);
  text('Sorry! This site is under construction.', width/2, height/2+100);
   text('More cool things to come.', width/2, height/2+150);
  
}