class Button{
	constructor(x, y, width, height, color, textColor, text, callback){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
		this.textColor = textColor;
		this.text = text;
		this.callback = callback;
	}
	update(){
		
	}
	checkCollision(x, y){
		// clicking button collision
		return (x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height);
	}
	render(){
		// draw button
		ctx.save();
		ctx.fillStyle = this.color;
		ctx.strokeStyle = this.textColor;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.strokeRect(this.x, this.y, this.width, this.height);
		ctx.restore();
		
		// draw buttons text
		ctx.save();
		ctx.fillStyle = this.textColor;
		ctx.textAlign = "center";
		ctx.font = (this.height/100) * 70 + "px Righteous";
		ctx.textBaseline = "middle";
		ctx.fillText(this.text, this.x + (this.width/2), this.y + (this.height/2));
		ctx.restore();
	}
}