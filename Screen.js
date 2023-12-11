class Screen{
	constructor(){
		this.buttonList = [];
	}
	renderButtons(){
		for(let button of this.buttonList){
			button.update();
			button.render();
		}
	}
}