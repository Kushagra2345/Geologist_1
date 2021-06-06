class Rubber{

    constructor(x,y,radius){


        var options={
            isStatic:false,
            density:1,
            restitution:0.8,
            friction:0.4,
            inertia:30
        }
    
        this.body=Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
        this.radius=2*radius;
       
        
      
    }
    
    display(){


        push()
        translate(this.body.position.x,this.body.position.y)
        fill("purple")
        circle(0,0,this.radius)
        pop()
    }
}