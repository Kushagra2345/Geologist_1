class Hammer{

    constructor(x,y,width,height){


        var options={
            isStatic:false,
            restitution:2,
            density:3
            
        }
    
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    
       
    
    }
    
    display(){
        
        push()
        this.body.position.x=mouseX
        this.body.position.y=mouseY
        fill("yellow")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop()
    }
}