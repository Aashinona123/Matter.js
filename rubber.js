class Rubber  {
    constructor(x, y, width, height) {
      var options = {
        'restitution':0.5,
        'friction': 1.0,
        'density': 0.5
      }
      this.body = Bodies.rectangle(x, y,60,60, options);
      this.width = width;
      this.height = height;
  
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      push();
      rectMode(CENTER);
      fill("green");
      strokeWeight(2)
      stroke("white")
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  