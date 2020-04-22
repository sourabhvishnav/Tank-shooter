class CanonBall {
  constructor() {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    
    this.body = Bodies.rectangle(20,450,35,38,options);
    this.width = 35;
    this.height = 35;
    this.image = loadImage("canonBall.png");
    World.add(world,this.body);

  };

  display(){
     
    var pos = this.body.position;
    ellipseMode(CENTER);
    fill("black");
    image(this.image, pos.x,pos.y,35, 35);
  };
};
