'use strict';

const fancyMod = function(a,b) { return (a%b+b)%b; } //modulo that handles negative numbers properly, e.g. -1 % 4 = 3
const fancyDefined = function(v) { return v !== undefined && v !== null; }

class Canvas {
	constructor(element) {
		//DOM	
		if(!fancyDefined(element)) {
			console.error("Canvas Error: No DOM element found.");
			return;
		}

		//CANVAS
		this.canvas = element;
		this.context = this.canvas.getContext('2d');
	}

	draw(timestamp) {
		const ctx = this.context;
		ctx.fillStyle = "#f04";
		ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}
}
