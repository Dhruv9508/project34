class Pendulum{
    constructor(x,y,color){
        var option={
            restitution:1,
            friction:0,
            frictionAir:0.0,
            slope:1,
            inertia:Infinity
        };
        this.body=Bodies.rectangle(x,y,40,40,options);
        this.x=y;
        this.y=y;
        this.color=color;
        World.add(world,this.body);
    }
    display() {
        if (this.sling.bodyA) {
            var angle = this.body.angle;
            var pos= this.body.position;
            Push();
            translate(pos.x,pos.y);
            rotate(angle);
            ellipse(0,0,60,60)
            nostroke();
            pop();
        }
    }
}