import { Vroom, VroomEntity, VroomSprite } from './vroom/vroom'

var map = new VroomEntity(false);

// Init function for module. NOTE: default arguments are placeholders and need to be replaced or defined.
map.init = function() {
	this._id = Vroom.generateID();

	this.layer = 4;

	this.dim = {
		width: 5990,
		height: 5990,
	};

	this.updateBounds();

	this.pos = {
		x: -(5990 / 2),
		y: -(5990 / 2),
	};

	this.vel = {
		x: 0,
		y: 0,
	};

	this.sprite = new VroomSprite('/map.png', false);

	// Register entity
	Vroom.registerEntity(map);
};

// Collision event function. Is called every tick the entity is colliding.
map.onCollision = function(target) {
	
};

// Update function. Handles all logic for objects related to this module.
map.update = function(step) {

};

// Render function. Draws all elements related to this module to screen.
map.render = function(camera) {
	var relativePos = {
		x: this.pos.x - camera.pos.x,
		y: this.pos.y - camera.pos.y,
	};

	this.sprite.render(relativePos, this.dim, this.dim);
};

export default map;