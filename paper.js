class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,20,options);
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER);
        fill("pink");
        image(this.image,0,0,40,40);
        pop();
    }
}