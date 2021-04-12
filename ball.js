class Ball {
    constructor(x,y,radius) {
      var options = {
        'restitution':1,
        'friction':0,
        'frictionAir':0,
        'frictionStatic':0,
        'density':10
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius=radius*2;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill(color(192,192,192));
      stroke(color(192,192,192));
      ellipse(pos.x, pos.y,this.radius);
    }
  }