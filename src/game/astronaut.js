import { Vroom, VroomEntity } from './vroom/vroom'

import store from '@/store';

var astronaut = new VroomEntity(false);

// Init function for module. NOTE: default arguments are placeholders and need to be replaced or defined.
astronaut.init = function() {
	this._id = Vroom.generateID();

	this.layer = 2;

	this.dim = {
		width: 18,
		height: 18,
	};

	this.updateBounds();

	this.pos = {
		x: 0,
		y: 0,
	};

	this.targetPos = {
		x: 0,
		y: 0,
	};

	this.vel = {
		x: 0,
		y: 0,
	};

	this.speed = 0.15;

	this.attributeOne = "Hello World";

	// Register entity
	Vroom.registerEntity(astronaut);
};

// Collision event function. Is called every tick the entity is colliding.
astronaut.onCollision = function(target) {
	
};

// Update function. Handles all logic for objects related to this module.
astronaut.update = function(step) {
	// Set target to go to
	if(Vroom.mouseState.clicked == true) {
		this.targetPos.x = this.pos.x + Vroom.mouseState.pos.x - (Vroom.dim.width / 2);
		this.targetPos.y = this.pos.y + Vroom.mouseState.pos.y  - (Vroom.dim.height / 2);
	}

	// Move towards target if not already there
	if(this.pos.x !== this.targetPos.x || this.pos.y !== this.targetPos.y) {
		var cachedPos = {
			x: this.pos.x,
			y: this.pos.y
		};

		// Move x axis
		if(Math.abs(this.pos.x - this.targetPos.x) < 0.001) {
			this.pos.x = this.targetPos.x;
		} else {
			if(this.pos.x < this.targetPos.x) {
				this.pos.x += this.speed;
			} else {
				this.pos.x -= this.speed;
			}
		}

		// Move y axis
		if(Math.abs(this.pos.y - this.targetPos.y) < 0.001) {
			this.pos.y = this.targetPos.y;
		} else {
			if(this.pos.y < this.targetPos.y) {
				this.pos.y += this.speed;
			} else {
				this.pos.y -= this.speed;
			}
		}



		// Use stamina when moving
		store.state.resources.stamina -= Vroom.getDistance(cachedPos, this.pos) * 0.005;
	}
};

// Render function. Draws all elements related to this module to screen.
astronaut.render = function(camera) {
	var relativePos = {
		x: this.pos.x - camera.pos.x,
		y: this.pos.y - camera.pos.y,
	};

	Vroom.ctx.fillStyle = 'white';
	Vroom.ctx.beginPath();
	Vroom.ctx.arc(relativePos.x, relativePos.y, this.dim.width / 2, 0, 2 * Math.PI, false);
	Vroom.ctx.fill();
};

export default astronaut;