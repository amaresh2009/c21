class Ground{
    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        var groundoptions={
            isStatic:true
        }
        this.body=Matter.Bodies.rectangle(this.x,y,w,h,groundoptions) 
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
        }
}  
