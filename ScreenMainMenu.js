class ScreenMainMenu extends Screen{
	constructor(){
		super();
		// makes buttons
		this.buttonList.push(new Button((game.width/2) - 100, game.height/2, 200, 50, "#ffffff", "#000000", "Play", function(){
			CURRENT_SCREEN = new ScreenGame();
		}));
		this.buttonList.push(new Button((game.width/2) - 100, game.height/2 + 60, 200, 50, "#ffffff", "#000000", "Skins", function(){
			CURRENT_SCREEN = new ScreenSkin();
		}));
		this.buttonList.push(new Button((game.width/2) - 100, game.height/2 + 120, 200, 50, "#ffffff", "#000000", "Quit Game"));
	}
	update(){
		
	}
	render(){
		// draw background
		ctx.save();
		ctx.fillStyle = "#120136";
		ctx.fillRect(0, 0, game.width, game.height);
		ctx.restore();
		
		// draw title
		ctx.save();
		ctx.drawImage(textures.title, game.width/2 - (game.width/2), (game.height/100) * 5, game.width, game.height/100*30);
		ctx.restore();
		
		// render money amount
		ctx.save();
		ctx.fillStyle = "#66ff66";
		ctx.font = "25px Righteous"
		ctx.textBaseline = "bottom";
		ctx.textAlign = "center";
		ctx.fillText("$"+money, game.width/2, game.height/2 - 10);
		ctx.restore();
		this.renderButtons();
		
	}	
}
