class Stone{

    constructor(x,y,width,height){


        var options={
            isStatic:false,
            density:1.25,
            friction:0.4,
            inertia:20

        }
    
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
       
       
        
      
    }
    
    display(){

        var angle=this.body.angle

        push()
        fill("black")
        translate(this.body.position.x,this.body.position.y)
        rect(0,0,this.width,this.height)
        pop()
    }
}