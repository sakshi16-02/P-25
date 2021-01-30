class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;

		var options={
			isStatic:true
		}

		this.image=loadImage("dustbingreen.png")
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, options)
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options)
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options)
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			rectMode(CENTER)
			strokeWeight(4);
			fill(255)
			rect(posLeft.x, posLeft.y,this.wallThickness, this.dustbinHeight);
			rect(posRight.x, posRight.y,this.wallThickness, this.dustbinHeight);

			imageMode(CENTER)
			image(this.image,posBottom.x, posBottom.y-100,this.dustbinWidth, this.dustbinHeight);
			rect(posBottom.x, posBottom.y+10,this.dustbinWidth,this.wallThickness);
			
	}

}