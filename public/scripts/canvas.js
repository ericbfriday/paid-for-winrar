'use strict';

const fancyMod = function(a,b) { return (a%b+b)%b; } //modulo that handles negative numbers properly, e.g. -1 % 4 = 3
const fancyDefined = function(v) { return v !== undefined && v !== null; }

class Canvas {
	constructor(element) {
		if(!fancyDefined(element)) {
			console.error("Canvas Error: No DOM element found.");
			return;
		}
		this.map = null;
		this.canvas = element;
		this.context = this.canvas.getContext('2d');
	}

	//Called when the map changes. Prepares map rendering for optimal rendering at 60hz
	prepareMap(map) {
		if( !fancyDefined(map) ) return;
		
		this.map = map;
		for(let i=0; i<this.map.tiles.length; ++i) {
			let tile = this.map.tiles[i];
			switch(tile.tileType){
				case 'grass': 	tile.color = 'rgb(80,155,40)'; break;
				case 'dirt': 	tile.color = 'rgb(108,80,30)'; break;
				case 'sand': 	tile.color = 'rgb(220,220,60)'; break;
				case 'water': 	tile.color = 'rgb(0,40, 200)'; break;
				default: 		tile.color = 'rgb(255,0,255)'; break;
			}
		}
	}

	//Called every browser frame, more often than the map changes
	draw(timestamp) {
		if( !fancyDefined(this.map) ) return;
		const ctx = this.context;
		ctx.fillStyle = "#000";
		ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

		let camx = 0;
		let camy = 0;
		let size = 10;

		for(let i=0; i<this.map.tiles.length; ++i) {
			let tile = this.map.tiles[i];
			let x = tile.xPos - camx;
			let y = tile.yPos;

			ctx.fillStyle = tile.color;
			ctx.fillRect(x*size, y*size, size, size);
		}
	}
}
