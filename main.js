// context
var ctx = game.getContext("2d");

var sounds = {
	ballBounce: new Audio("BallBounce.wav"),
	ballPop: new Audio("PoppingSound.mp3"),
	buttonSound: new Audio("ButtonSound.mp3")
};
var bestScore = 0;
var money = 0;
var ownedItems = ["#fcbf1e"];
var selectedColor = "#fcbf1e";


if(localStorage.money){
	money = parseInt(localStorage.money);
}

if(localStorage.bestScore){
	bestScore = parseInt(localStorage.bestScore);
}

if(localStorage.ownedItems){
	ownedItems = JSON.parse(localStorage.ownedItems);
}

if(localStorage.selectedColor){
	selectedColor = localStorage.selectedColor;
}

function saveGameData(){
	localStorage.money = money;
	localStorage.bestScore = bestScore;
	localStorage.ownedItems = JSON.stringify(ownedItems);
	localStorage.selectedColor = selectedColor;
}

setInterval(saveGameData, 1000);

function playSound(sound){
	sound.pause();
	sound.currentTime = 0;
	sound.play();
}


// resize
window.onresize = function(){
	game.width = window.innerWidth;
	game.height = window.innerHeight;
};
window.onresize();

// load textures
var textures = {};
textures.title = new Image();
textures.title.src = "title.png";
textures.coin = new Image();
textures.coin.src = "coin.png";

// initial screen
var CURRENT_SCREEN = new ScreenMainMenu();

// button clicking ability
game.addEventListener("click", function(e){
	if(CURRENT_SCREEN.buttonList.length > 0){
		for(let button of CURRENT_SCREEN.buttonList){
			if(button.checkCollision(e.clientX, e.clientY)){
				playSound(sounds.buttonSound);
				button.callback();
			}
		}
	}
});

// when someone taps the screen
game.addEventListener("touchstart", function(e){
	if(CURRENT_SCREEN instanceof ScreenGame){
		let ball = CURRENT_SCREEN.ball;
		
		// if ball is on the wall it changes the direction
		if(ball.x - ball.radius <= 2 || ball.x + ball.radius >= game.width - 2){
			playSound(sounds.ballBounce);
			ball.velocity = -ball.velocity;
		}
	}
}, {passive: true});


// disable right click
game.addEventListener("contextmenu", function(e){
	e.preventDefault();
});

// draw loop
function draw(){
	// update and render current screen
	CURRENT_SCREEN.update();
	CURRENT_SCREEN.render();
}

setInterval(draw, 1000/60);