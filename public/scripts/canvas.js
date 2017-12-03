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
		this.draw(Date.now());
	}

	static attachToDOM() {
		//NOTE: This is run after the whole page is done loading because certain things like getBoundingClientRect() doesn't work before that
	  	var data = {};
	  	data.dothething=function() {
			data.canvii = [];
			Array.prototype.filter.call( document.getElementsByTagName("canvas"), function(el) { 
				this.push(new Canvas(el)); }.bind(this.canvii));
		}.bind(data);
		window.addEventListener("DOMContentLoaded", data.dothething);
		return data.canvii;
	}

	draw(timestamp) {
		const ctx = this.context;
		
		ctx.fillStyle = 'rgb(' +
			Math.sin(314 * timestamp) + ',' + 
			Math.sin(628 * timestamp) + ',' + 
			Math.sin(157 * timestamp) + ')';

		ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		this.requestID = window.requestAnimationFrame( this.draw.bind(this) );
	}
}
