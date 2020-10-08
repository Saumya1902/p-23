class Box{

    constructor(x,y,width,height){
    var option={
        isStatic:true
    }
     this.width=width;
     this.height=height;

     this.body=Bodies.rectangle(x,y,width,height,option)    
    }

    display(){
      rectMode(CENTER);
      fill("black");
     rect (this.body.position.x,this.body.position.y,this.width,this.height)
    }
};