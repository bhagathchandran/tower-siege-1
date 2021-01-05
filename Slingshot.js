class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling)
    }

    display(){
     if(this.sling.bodyA != null){
        var pointA =this.sling.bodyA.position;
        var pointB =this.sling.pointB;
       
           line(pointA.x+25,pointA.y,pointB.x-10,pointB.y)
           line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3)
       
    }
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body

    }
}