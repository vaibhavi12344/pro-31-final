class Slingshot{
constructor(bodyA,pointB){

var options={
bodyA:bodyA,
pointB:pointB,
stiffness:0.08,
length:1
}
this.bodyA=bodyA;
this.pointB=pointB;

this.Slingshot=Constraint.create(options);
World.add(world,this.Slingshot)

}
display(){
if(this.Slingshot.bodyA){
var pointA=this.bodyA.position;
var pointB=this.pointB
line(pointA.x,pointA.y,pointB.x,pointB.y)
}

}
fly(){
this.Slingshot.bodyA=null;
}
attach(bodyB){
this.Slingshot.bodyA=bodyB
}
}
