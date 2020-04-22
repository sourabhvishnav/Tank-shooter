class Box {
    constructor(x,y,width,height){
      
        var options ={
            "resitution": 0.5,
            "friction": 1,
            "density": 0.5,
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.body) 
    }
    display(){
        var pos = this.body.position;
        fill("gray");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

}