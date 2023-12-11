class Spike{
	constructor(y, side, speed){
		this.y = y;
		this.side = side;
		this.speed = speed;
		this.size = 20;
		if(this.side == "left"){
			this.x = 22;
		}
		if(this.side == "right"){
			this.x = game.width - 22;
		}
	}
	update(){
		this.y -= this.speed;
	}
	render(){
		ctx.save();
		ctx.fillStyle = "#ffffff";
		ctx.beginPath();
		ctx.moveTo(this.x, this.y);
		if(this.side == "left"){
			ctx.lineTo(this.x - this.size, this.y - (this.size / 2));
			ctx.lineTo(this.x - this.size, this.y + (this.size / 2));
			ctx.lineTo(this.x, this.y);
		}
		if(this.side == "right"){
			ctx.lineTo(this.x + this.size, this.y + (this.size / 2));
			ctx.lineTo(this.x + this.size, this.y - (this.size / 2));
			ctx.lineTo(this.x, this.y);
		}
		ctx.lineWidth = 2;
		ctx.strokeStyle = "#000000";
		ctx.stroke();
		ctx.fill();
		ctx.restore();
	}
}