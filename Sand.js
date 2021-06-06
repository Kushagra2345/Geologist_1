class Sand{

    constructor(x,y,radius){


        var options={
            isStatic:false,
            density:0.5,
            restitution:0.1,
            friction:0.25
        }
    
        this.body=Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
        this.radius=2*radius;
       
    }
    
    display(){


        push()
        translate(this.body.position.x,this.body.position.y)
        fill("orange")
        circle(0,0,this.radius)
        pop()
    }

}