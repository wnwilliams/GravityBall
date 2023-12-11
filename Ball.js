class Ball{
	constructor(x, y, radius, color){
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.velocity = 15;
	}
	update(){
		// ball physics
		this.x += this.velocity;
		
		// preventing ball from leaving screen
		if(this.x + this.radius > game.width){
			this.x = game.width - this.radius - 2;
		}
		if(this.x - this.radius < 0){
			this.x = this.radius + 2;
		}
	}
	render(){
		// drawing ball
		ctx.save();
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.lineWidth = 5;
		ctx.stroke();
		ctx.fill();
		ctx.restore();
	}
}