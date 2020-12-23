class Polygon {
    constructor(x,y,angle){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Matter.Bodies.circle(x, y, 25, options);
        this.diameter = 50
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }      
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        stroke("white")
        fill("white")
        circle(0,0,this.diameter);
        imageMode(CENTER);
        image(this.image, 0 ,0,this.diameter);
        pop();
      }
    }