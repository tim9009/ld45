////////////////////////////// GAME VARIABLES //////////////////////////////

import { Vroom } from './vroom/vroom'

import astronaut from './astronaut'
import map from './map'

import { PointOfInterest } from './point_of_interest'
import { Task } from './task'

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
			physicsEnabled: true,
			gravityEnabled: false,
			gravity: {
				x: 0,
				y: 0
			},
			friction: {
				x: 0.999,
				y: 0.999
			}
		}
	});

	Vroom.updateSize();

	// Init call
	astronaut.init();
	store.state.astronautId = astronaut._id;
	map.init();

	// One
	var POIOne = new PointOfInterest({
		pos: {
			x: 200,
			y: 288
		},
		communication: {
			image: 'img/communications/water.jpg',
			text: 'I found fresh drinkable water! Initial testing shows only minor levels of contamination. Nothing our filters can\'t handle.'
		}
	});
	POIOne.init();
	Vroom.registerEntity(POIOne);

	var taskOne = new Task({
		text: 'Find a source of water',
		condition: function() {
			return POIOne.checked == true;
		}
	});
	taskOne.init();
	Vroom.registerEntity(taskOne);

	// Two
	var POITwo = new PointOfInterest({
		pos: {
			x: -600,
			y: -10
		},
		communication: {
			image: 'img/communications/vegetation.jpg',
			text: 'Well, it\'s not the best thing I have ever had, but it is edible. How cool is it that I am now eating something no other human has ever tasted before! Wait, does this mean I get to name this thing? Huh... '
		}
	});
	POITwo.init();
	Vroom.registerEntity(POITwo);

	var taskTwo = new Task({
		text: 'Find edible vegetation',
		condition: function() {
			return POITwo.checked == true;
		}
	});
	taskTwo.init();
	Vroom.registerEntity(taskTwo);

	// Three
	var POIThree = new PointOfInterest({
		pos: {
			x: -1000,
			y: -900
		},
		communication: {
			image: 'img/communications/material.jpg',
			text: 'This seems like a suitable building material. Looks like it is durable enough and it is literally everywhere. On to the next task!'
		}
	});
	POIThree.init();
	Vroom.registerEntity(POIThree);

	var taskThree = new Task({
		text: 'Find a suitable building material',
		condition: function() {
			return POIThree.checked == true;
		}
	});
	taskThree.init();
	Vroom.registerEntity(taskThree);

	// Four
	var POIFour = new PointOfInterest({
		pos: {
			x: 880,
			y: 850
		},
		communication: {
			image: 'img/communications/soil.jpg',
			text: 'Soil sample collected. Looks good from what I can see, but I need to do more testing.'
		}
	});
	POIFour.init();
	Vroom.registerEntity(POIFour);

	var taskThree = new Task({
		text: 'Take a soil sample',
		condition: function() {
			return POIFour.checked == true;
		}
	});
	taskThree.init();
	Vroom.registerEntity(taskThree);
}

function startGame() {
	var startPos = {
		x: Vroom.dim.width / 2,
		y: Vroom.dim.height / 2,
	};

	Vroom.activateCamera(Vroom.createCamera(0, 0, 1, 'both', 0.002));
	Vroom.activeCamera.follow(astronaut._id);
	Vroom.activeCamera.pos.x = astronaut.pos.x - (Vroom.dim.width / 2)
	Vroom.activeCamera.pos.y = astronaut.pos.y - (Vroom.dim.height / 2)

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

	console.log('Game started!');
}

function updateViewportSize() {
	Vroom.updateSize()
	Vroom.activeCamera.follow(astronaut._id)
}

Vroom.mainUpdateLoopExtension = function(step) {
	// Check win condition
	if(!store.state.gameWon) {
		var allTasksDone = true;
		for (var task in store.state.tasks) {
			if(!store.state.tasks[task].done) {
				allTasksDone = false;
				break;
			}
		}

		store.state.gameWon = allTasksDone;
	}

	// Check loss condition
	if(!store.state.gameLost && store.state.resources.oxygen <= 0) {
		store.state.gameLost = true;
	}
};

export default {
	initEngine,
	startGame,
	updateViewportSize
};