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

	var taskOne = new Task({
		text: 'This is a task!',
		condition: function() {
			return store.state.resources.health <= 50;
		}
	});
	taskOne.init();
	Vroom.registerEntity(taskOne);

	var test = new PointOfInterest({
		pos: {
			x: 80,
			y: 50
		},
		communication: {
			image: '/img/communications/test.jpg',
			sound: 'https://ia800406.us.archive.org/23/items/PeterHernandezPodcastAudioPlaceholder/AudioPlaceholder.mp3',
			text: 'Hello World!'
		},
		resources: {
			health: -90
		}
	});
	test.init();
	Vroom.registerEntity(test);

	var testTwo = new PointOfInterest({
		pos: {
			x: 120,
			y: 80
		},
		communication: {
			image: '/img/communications/test.jpg',
			sound: 'https://ia800406.us.archive.org/23/items/PeterHernandezPodcastAudioPlaceholder/AudioPlaceholder.mp3',
			text: 'Hello World!'
		},
		resources: {
			health: -10
		}
	});
	testTwo.init();
	Vroom.registerEntity(testTwo);
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

	console.log('Game started!')
}

function updateViewportSize() {
	Vroom.updateSize()
	Vroom.activeCamera.follow(astronaut._id)
}

Vroom.mainUpdateLoopExtension = function() {
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
	if(!store.state.gameLost && store.state.resources.health <= 0) {
		store.state.gameLost = true;
	}
};

export default {
	initEngine,
	startGame,
	updateViewportSize
};