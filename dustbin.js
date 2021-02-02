class Dustbin
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.width = 200;
		this.height = 213;
		this.wallThickness = 20;
		this.angle = 0;
		this.image = loadImage("dustbin1.png");

		var options =
		{
			isStatic: true
		}
		this.bottomWall = Bodies.rectangle(this.x, this.y, this.width, this.wallThickness, options);

		
		
		World.add(world, this.bottomWall);
		

	}
	
	display()
	{
			var posBottom = this.bottomWall.position;
			

			push();
			translate(posBottom.x, posBottom.y);
			fill(255);
						
			imageMode(CENTER);
			image(this.image, 0, -this.height / 2, this.width, this.height);
			pop();
	}
}