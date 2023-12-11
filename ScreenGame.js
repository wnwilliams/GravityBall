class ScreenGame extends Screen{
	constructor(){
		super();
		
		// score
		this.score = 0;
		this.actualScore = 0;
		
		// making ball
		this.ball = new Ball(game.width/2, (game.height/100) * 15, 20, selectedColor);
		
		// array of spikes
		this.spikes = [];
		this.addSpike();
		
		this.interval = setInterval(()=>{
			this.addSpike();
		}, 2000);
	}
	updateBallVelocity(vel){
		if(this.ball.velocity < 0){
			this.ball.velocity = -vel;
		} else {
			this.ball.velocity = vel;
		}
	}
	addSpike(){
		let percent = Math.random();
		let speed = 5;
		if(this.score > 10){
			speed = 8;
			this.updateBallVelocity(18);
			this.updateInterval(1000);
		}
		if(this.score > 50){
			speed = 12;
			this.updateBallVelocity(20);
			this.updateInterval(800);
		}
		if(this.score > 200){
			speed = 16;
			this.updateBallVelocity(21);
			this.updateInterval(600);
		}
		if(this.score > 300){
			speed = 20;
			this.updateBallVelocity(23);
			this.updateInterval(300);
		}
		if(this.score > 500){
			speed = 24;
			this.updateBallVelocity(40);
			this.updateInterval(250);
		}
		if(this.score > 1000){
			speed = 30;
			this.updateBallVelocity(60);
			this.updateInterval(150);
		}
		if(this.score > 2000){
			speed = 50;
			this.updateBallVelocity(150);
			this.updateInterval(150);
		}
		if(this.score > 5000){
			speed = 100;
			this.updateBallVelocity(550);
			this.updateInterval(50);
		}
		if(this.score > 10000){
			speed = 120;
			this.updateBallVelocity(1000);
			this.updateInterval(10);
		}
		if(this.score > 50000){
			speed = 20;
			this.updateBallVelocity(23);
			this.updateInterval(300);
		}

		if(percent > 0.5){
			for(let y=0; y<5; y++){
				this.spikes.push(new Spike(game.height + (22 * y), "right", speed));
			}
		} else {
			for(let y=0; y<5; y++){
				this.spikes.push(new Spike(game.height + (22 * y), "left", speed));
			}
		}
	}
	updateInterval(ms){
		clearInterval(this.interval);
		this.interval = setInterval(()=>{
			this.addSpike();
		}, ms);
	}
	update(){
		// updates ball
		this.ball.update();
	}
	render(){
		// draw background
		ctx.save();
		ctx.fillStyle = "#035aa6";
		ctx.fillRect(0, 0, game.width, game.height);
		ctx.restore();
		
		// draws and updates spikes
		for(let i=this.spikes.length-1; i>=0; i--){
			let spike = this.spikes[i];
			spike.update();
			spike.render();
			// spike logic
			if(spike.y + (spike.size / 2) < 0){
				this.spikes.splice(this.spikes.indexOf(spike), 1);
				this.score += 1;
				if(money <= 10000000){
					money += 1;
				}
				this.actualScore = (this.score%5==0 ? this.score/5 : Math.floor(this.score/5));
			}
			// hit collision
			if(this.ball.x >= spike.x - spike.size && this.ball.x <= spike.x && this.ball.y >= spike.y - (spike.size/2) && this.ball.y <= spike.y + (spike.size/2)){
				playSound(sounds.ballPop);
				CURRENT_SCREEN = new ScreenGameOver(this.actualScore);
			}
		}
		
		// draws ball
		this.ball.render();
		
		
		// draws score
		ctx.save();
		ctx.fillStyle = "#ffffff";
		ctx.font = "20px Hind Siliguri";
		ctx.textAlign = "center";
		ctx.fillText(this.actualScore, game.width/2, 45);
		ctx.font = "10px Hind Siliguri";
		ctx.fillText("Score", game.width/2, 25);
		ctx.restore();
	}
}