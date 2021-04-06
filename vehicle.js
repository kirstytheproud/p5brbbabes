function Vehicle(x, y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = 8;
    this.maxspeed = 8;
    this.maxforce = 0.9;
    
  }
  
  Vehicle.prototype.behaviours = function (){
    let arrive = this.arrive(this.target);
    let mouse = createVector(mouseX, mouseY);
    let flee = this.flee(mouse);
    
    //makes the fleeing force much stronger than arrive force
    arrive.mult(1);
    flee.mult(5);
    
    this.applyForce(arrive);
    this.applyForce(flee);
  
  }
  
  Vehicle.prototype.applyForce = function(f){
    this.acc.add(f);
  }
  
  Vehicle.prototype.update = function() {
      this.pos.add(this.vel);
      this.vel.add(this.acc);
      this.acc.mult(0);
  }
  
  Vehicle.prototype.show = function () {
    
    strokeWeight(8);
    point(this.pos.x, this.pos.y, 150);
    let coloursR = random(20, 255);
    let coloursB = random(10, 250);
    stroke(coloursR, 0, coloursB);
      
    
  }
  
  Vehicle.prototype.arrive = function(target){
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();
    let speed = this.maxspeed;
    
    if ( d < 100) {
       speed = map(d, 0, 100, 0, this.maxspeed);
    }
    
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
    
  }
  
  Vehicle.prototype.flee = function(target){
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();
    
    if (d < 50) {
      desired.setMag(this.maxspeed);
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
      } else {
        return createVector(0,0);
      }
  }