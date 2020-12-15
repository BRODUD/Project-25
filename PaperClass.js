class Paper{
    constructor(x,y,radius){
        this.image=loadImage("paper.png");
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,(radius-20)/2,options);
        this.radius=radius;
        World.add(world,this.body);
        
    }

    display(){
        var pos =this.body.position;
        translate(pos.x,pos.y);
        //stroke("white")
        //fill("cyan")
        //ellipseMode(RADIUS);
        //ellipse(pos.x,pos.y,this.radius,this.radius);
        imageMode(CENTER)
        image(this.image,0,0,this.radius, this.radius)

    }
}