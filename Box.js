class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
 }
 display(){
  if(this.body.speed <6 ){
   super.display();
  }
  else{
      push(); 
      World.remove(world, this.body); 
      this.visibility = this.visibility - 1; 
 tint(255, this.visibility); pop(); 
  }
}

  };
  