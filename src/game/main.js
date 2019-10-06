////////////////////////////// GAME VARIABLES //////////////////////////////

import { Vroom } from './vroom/vroom'

import astronaut from './astronaut'
import map from './map'

import store from '@/store';

function initEngine() {
	Vroom.init({
		dim: {
			width: 1920,
			height: 1080,
		},
		fps: 60,
		inputPreventDefault: [32, 17, 37, 38, 39, 40],
		backgroundColor: '#190E18',
		physics: {
			physicsEnabled: false,
			gravityEnabled: false,
			gravity: {
				x: 0,
				y: 0,
			},
			friction: {
				x: 0.999,
				y: 0.999,
			}
		},
	});

	Vroom.updateSize();

	// Init call
	astronaut.init();
	map.init();
}

function startGame() {
	var startPos = {
		x: Vroom.dim.width / 2,
		y: Vroom.dim.height / 2,
	};

	Vroom.activateCamera(Vroom.createCamera(0, 0, 1, 'both', 0));
	Vroom.activeCamera.follow(astronaut._id);

	// Disable image smooting
	var imageSmoothingEnabled = true;
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

function updateViewportSize() {
	Vroom.updateSize()
	Vroom.activeCamera.follow(astronaut._id)
}

Vroom.mainUpdateLoopExtension = function() {
	
};

export default {
	initEngine,
	startGame,
	updateViewportSize
};