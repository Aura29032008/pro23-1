class Ground{
    constructor(x,y,w,h){
        var ground_option={
            isStatic: true
        }
    this.body=Bodies.rectangle(x,y,w,h,ground_option);
    this.width=w;
    this.height=h;
    World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}