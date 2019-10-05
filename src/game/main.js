////////////////////////////// GAME VARIABLES //////////////////////////////

import Vroom from './vroom/vroom'

import store from '@/store';

function initEngine() {
	Vroom.init({
		dim: {
			width: 320,
			height: 180,
		},
		fps: 60,
		inputPreventDefault: [32, 17, 37, 38, 39, 40],
		backgroundColor: '#190E18',
		physics: {
			physicsEnabled: true,
			gravityEnabled: true,
			gravity: {
				x: 0,
				y: 0.0003,
			},
			friction: {
				x: 0.999,
				y: 0.999,
			}
		},
	});
}

function startGame() {
	var startPos = {
		x: Vroom.dim.width / 2,
		y: Vroom.dim.height / 2,
	};

	Vroom.activateCamera(Vroom.createCamera(startPos.x, startPos.y, 1, 'both', 0.007));

	// Disable image smooting
	var imageSmoothingEnabled = false;
	Vroom.ctx.mozImageSmoothingEnabled = imageSmoothingEnabled;
	Vroom.ctx.webkitImageSmoothingEnabled = imageSmoothingEnabled;
	Vroom.ctx.msImageSmoothingEnabled = imageSmoothingEnabled;
	Vroom.ctx.imageSmoothingEnabled = imageSmoothingEnabled;

	// Vroooom vrooom!
	Vroom.run();

	store.state.gameStarted = true;

	// Set focus on window to make the game work when played in an iFrame
	window.focus();
	
	console.log('Game started!')
}

Vroom.mainUpdateLoopExtension = function() {
	
};

export default {
	initEngine,
	startGame
};