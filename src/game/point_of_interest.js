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

	this.areaIndicatorPos = {
		x: 0,
		y: 0
	};

	this.areaIndicatorVisible = false;
	this.areaIndicatorVisibleStart = null;
	this.areaIndicatorVisibleTime = 6000;

	this.areaIndicatorSize = 200;

	this.respondingToScan = false;
	this.scanResponseStart = null;
	this.scanResponseTime = 2000;

	this.init();
}

// Set correct prototype and costructor
PointOfInterest.prototype = Object.create(VroomEntity.prototype);
PointOfInterest.prototype.constructor = PointOfInterest;

// Init function
PointOfInterest.prototype.init = function() {
	this.layer = 2;

	this.dim = {
		width: 20,
		height: 20,
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

		if(this.communication) {
			store.dispatch('clearCommunication');
			store.dispatch('setCommunication', this.communication);

			store.state.communication.visible = true;
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
	// Respond to scan
	if(store.state.scanning && !this.checked && !this.respondingToScan) {
		this.respondingToScan = true;
		this.scanResponseStart = Date.now();

		this.areaIndicatorSize = Vroom.getDistance(Vroom.getEntity(store.state.astronautId).pos, this.pos) / 2;

		this.areaIndicatorPos.x = this.pos.x + Math.floor(Math.random() * this.areaIndicatorSize) - (this.areaIndicatorSize / 2);
		this.areaIndicatorPos.y = this.pos.y + Math.floor(Math.random() * this.areaIndicatorSize) - (this.areaIndicatorSize / 2);

		this.areaIndicatorVisible = true;
		
		this.areaIndicatorVisibleStart = Date.now();
	}

	// Check if responding to scan
	if(this.respondingToScan) {
		// Check if done scanning
		if(!store.state.scanning && Date.now() - this.scanResponseStart > this.scanResponseTime) {
			this.respondingToScan = false;
		}
	}

	// Check if done indicating
	if(this.areaIndicatorVisible && Date.now() - this.areaIndicatorVisibleStart > this.areaIndicatorVisibleTime) {
		this.areaIndicatorVisible = false;
	}
};

// Render function. Draws all elements related to this module to screen.
PointOfInterest.prototype.render = function(camera) {
	var relativeAreaIndicatorPos = {
		x: this.areaIndicatorPos.x - camera.pos.x,
		y: this.areaIndicatorPos.y - camera.pos.y,
	};

	// Scan wave
	if(this.respondingToScan) {
		var size = Date.now() - this.scanResponseStart;
		var opacity = 1 - (size / this.scanResponseTime);

		Vroom.ctx.fillStyle = 'rgba(193, 0, 159, ' + opacity +')';
		Vroom.ctx.beginPath();
		Vroom.ctx.arc(relativeAreaIndicatorPos.x, relativeAreaIndicatorPos.y, size, 0, 2 * Math.PI, false);
		Vroom.ctx.fill();
	}

	// Area indicator
	if(this.areaIndicatorVisible) {
		var opacity = 1 - ((Date.now() - this.areaIndicatorVisibleStart) / this.areaIndicatorVisibleTime);

		Vroom.ctx.fillStyle = 'rgba(193, 0, 159, ' + opacity +')';
		Vroom.ctx.beginPath();
		Vroom.ctx.arc(relativeAreaIndicatorPos.x, relativeAreaIndicatorPos.y, this.areaIndicatorSize, 0, 2 * Math.PI, false);
		Vroom.ctx.fill();
	}

	if(this.checked) {
		var relativePos = {
			x: this.pos.x - camera.pos.x,
			y: this.pos.y - camera.pos.y,
		};

		Vroom.ctx.fillStyle = 'rgba(193, 0, 159, 1)';

		Vroom.ctx.beginPath();
		Vroom.ctx.arc(relativePos.x, relativePos.y, this.dim.width / 2, 0, 2 * Math.PI, false);
		Vroom.ctx.fill();
	}
};