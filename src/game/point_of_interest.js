import { Vroom, VroomEntity } from './vroom/vroom'

import store from '@/store';

// Constructor
export function PointOfInterest(initArgs) {
	// Extend VroomEntity NOTE: default arguments are placeholders and need to be replaced or defined.
	VroomEntity.call(this, true, VroomEntity.DYNAMIC, VroomEntity.NONE);
	this._id = Vroom.generateID();

	if(initArgs.pos) {
		this.pos = initArgs.pos;
	}

	if(initArgs.communication) {
		this.communication = initArgs.communication;
	}

	if(initArgs.resources) {
		this.resources = initArgs.resources;
	}

	this.checked = false;
	this.openDelay = 1000;

	this.init();
}

// Set correct prototype and costructor
PointOfInterest.prototype = Object.create(VroomEntity.prototype);
PointOfInterest.prototype.constructor = PointOfInterest;

// Init function
PointOfInterest.prototype.init = function() {
	this.layer = 2;

	this.dim = {
		width: 10,
		height: 10,
	};

	if(!this.pos) {
		this.pos = {
			x: 0,
			y: 0
		}
	}

	this.updateBounds();

	this.vel = {
		x: 0,
		y: 0,
	};
};

PointOfInterest.prototype.onCollision = function(target) {
	if(!this.checked) {
		console.log('Hey, a POI!');

		window.setTimeout(function() {
			store.state.communication.visible = true;
		}, this.openDelay);

		if(this.communication) {
			store.dispatch('clearCommunication');
			store.dispatch('setCommunication', this.communication);
		}

		if(this.resources) {
			if(this.resources.health) {
				store.state.resources.health += this.resources.health
			}
		}

		this.checked = true;
	}
};

// Update function. Handles all logic for objects related to this class.
PointOfInterest.prototype.update = function(step) {
};

// Render function. Draws all elements related to this module to screen.
PointOfInterest.prototype.render = function(camera) {
	var relativePos = {
		x: this.pos.x - camera.pos.x,
		y: this.pos.y - camera.pos.y,
	};

	Vroom.ctx.fillStyle = 'purple';
	Vroom.ctx.beginPath();
	Vroom.ctx.arc(relativePos.x, relativePos.y, this.dim.width / 2, 0, 2 * Math.PI, false);
	Vroom.ctx.fill();
};