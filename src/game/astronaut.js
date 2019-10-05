import { Vroom, VroomEntity } from './vroom/vroom'

var astronaut = new VroomEntity(false);

// Init function for module. NOTE: default arguments are placeholders and need to be replaced or defined.
astronaut.init = function() {
	this._id = Vroom.generateID();

	this.layer = 1;

	this.dim = {
		width: 100,
		height: 100,
	};

	this.updateBounds();

	this.pos = {
		x: 0,
		y: 0,
	};

	this.vel = {
		x: 0,
		y: 0,
	};

	this.attributeOne = "Hello World";

	// Register entity
	Vroom.registerEntity(astronaut);
};

// Collision event function. Is called every tick the entity is colliding.
astronaut.onCollision = function(target) {
	
};

// Update function. Handles all logic for objects related to this module.
astronaut.update = function(step) {

};

// Render function. Draws all elements related to this module to screen.
astronaut.render = function(camera) {
	var relativePos = {
		x: this.pos.x - camera.pos.x,
		y: this.pos.y - camera.pos.y,
	};

	Vroom.ctx.fillStyle = 'red';
	Vroom.ctx.fillRect(relativePos.x, relativePos.y, this.dim.width, this.dim.height);
};

export default astronaut;