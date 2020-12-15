class Particle{
    constructor(x,y,radius){
        var options ={
            isStatic:false
        }

        this.x = x;
        this.y = y;
        this.r = radius;
        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.r);
    }
}
