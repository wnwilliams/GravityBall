class ScreenSkin extends Screen{
	constructor(){
		super();
		
		this.buttonList.push(new Button(5, 5, 80, 30, "#ffffff", "#000000", "Back", function(){
			CURRENT_SCREEN = new ScreenMainMenu();
		}));
		
		this.balls = [];
		this.colors = ["tomato", "#fcbf1e", "lime", "pink", "blue", "purple", "red", "white", "black"];
		this.prices = [400, 200, 400, 1300, 1800, 1300, 5000, 10000, 10000];
		
		let i = 0;
		
		// making rows of balls and buttons
		
		for(let y=0; y<3; y++){
			for(let x=0; x<3; x++){
				let spacing = game.width/3;
				let xoffset = game.width/6;
				this.balls.push(new Ball(xoffset + (x*spacing), game.height/5 + (y*180), 20, this.colors[i]));
				
				// buying system
				if(ownedItems.indexOf(this.colors[i]) != -1){
					if(selectedColor == this.colors[i]){
						this.buttonList.push(new Button((xoffset + (x*spacing))-40, game.height/5 + 50 + (y*180), 80, 30, "#00ff00", "#000000", "", function(){}));
					} else {
						let f = i;
						this.buttonList.push(new Button((xoffset + (x*spacing))-40, game.height/5 + 50 + (y*180), 80, 30, "#ffffff", "#000000", "Select", ()=>{
							selectedColor = this.colors[f];
							CURRENT_SCREEN = new ScreenSkin();
						}));
					}
				} else {
					let f = i;
					this.buttonList.push(new Button((xoffset + (x*spacing))-40, game.height/5 + 50 + (y*180), 80, 30, "#ffffff", "#000000", "$"+this.prices[i], ()=>{
						if(money >= this.prices[f]){
							ownedItems.push(this.colors[f]);
							money -= this.prices[f];
							CURRENT_SCREEN = new ScreenSkin();
						}
					}));
				}
				i++;
			}
		}
				
	}
	
	
	update(){
		
	}
	render(){
		// draws background
		ctx.save();
		ctx.fillStyle = "#40bad5";
		ctx.fillRect(0, 0, game.width, game.height);
		ctx.restore();
		
		// renders money
		ctx.save();
		ctx.fillStyle = "#000";
		ctx.font = "25px Righteous"
		ctx.textBaseline = "bottom";
		ctx.textAlign = "right";
		ctx.fillText("$"+money, game.width - 5, 35);
		ctx.restore();
		
		this.renderButtons();
		for(let b of this.balls){
			b.render();
		}
	}
}