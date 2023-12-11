class ScreenGameOver extends Screen{
	constructor(score){
		super();
		this.score = score;
		this.buttonList.push(new Button(game.width/2 - 100, (game.height/2) + 30, 200, 50, "#ffffff", "#000000", "Back", function(){
			CURRENT_SCREEN = new ScreenMainMenu();
		}));
		if(this.score > bestScore){
			bestScore = this.score;
		}
	}
	update(){
		
	}
	render(){
		// draw background
		ctx.save();
		ctx.fillStyle = "#120136";
		ctx.fillRect(0, 0, game.width, game.height);
		ctx.restore();
		
		// game over text
		ctx.save();
		ctx.font = "50px Hind Siliguri";
		ctx.fillStyle = "#fcbf1e";
		ctx.textAlign = "center"
		ctx.fillText("Game Over", game.width/2, game.height/2 - 80);
		ctx.restore();
		
		// score
		ctx.save();
		ctx.font = "30px Hind Siliguri";
		ctx.fillStyle = "#ffffff";
		ctx.textAlign = "center"
		ctx.fillText("Score: " + this.score, game.width/2, game.height/2);
		ctx.fillText("Best Score: " + bestScore, game.width/2, game.height/2 - 40);
		ctx.restore();
		
		this.renderButtons();
	}
}	
