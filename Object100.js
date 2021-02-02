class Object100 {
    constructor(x,y,width,height){
        var option = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        strokeWeight(1)
        stroke('black')
        fill("black");
        rect(pos.x,pos.y,this.width,this.height);
    }
    }