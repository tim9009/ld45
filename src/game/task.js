import { Vroom, VroomEntity } from './vroom/vroom'

import store from '@/store';

// Constructor
export function Task(initArgs) {
	// Extend VroomEntity NOTE: default arguments are placeholders and need to be replaced or defined.
	VroomEntity.call(this, false);
	this._id = Vroom.generateID();

	if(initArgs.communication) {
		this.communication = initArgs.communication;
	}

	if(initArgs.resources) {
		this.resources = initArgs.resources;
	}

	this.text = initArgs.text || '';
	this.done = initArgs.done || false;
	this.available = initArgs.available || true;

	this.condition = initArgs.condition || function() { return false; };
	this.onDone = initArgs.onDone || function() {};
}

// Set correct prototype and costructor
Task.prototype = Object.create(VroomEntity.prototype);
Task.prototype.constructor = Task;

// Init function
Task.prototype.init = function() {
	this.layer = 1;

	this.dim = {
		width: 0,
		height: 0,
	};

	this.pos = {
		x: 0,
		y: 0
	}

	this.updateBounds();

	// Add task to state
	store.state.tasks.push({
		id: this._id,
		text: this.text,
		done: this.done,
		available: this.available,
	})
};

// Update function. Handles all logic for objects related to this class.
Task.prototype.update = function(step) {
	if(!this.done && this.condition()) {
		this.done = true;

		// Update state
		for(var task in store.state.tasks) {
			// Set task to done
			if(store.state.tasks[task].id === this._id) {
				store.state.tasks[task].done = true;
				break;
			}
		}

		this.onDone();
	}
};

// Render function. Draws all elements related to this module to screen.
Task.prototype.render = function(camera) {
	
};