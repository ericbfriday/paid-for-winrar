'use strict';
const router = require('express').Router();
const path = require('path');
const Sequelize = require('../../models/sequelize.js');
const Context = require('../../models/context.js');

const getTileType = function() {
	const randomNumber = Math.random();
	let tileType;

	if (randomNumber < 0.3) {
		tileType = 'dirt';
	} else if (randomNumber > 0.3 && randomNumber < 0.6) {
		tileType = 'grass';
	} else if (randomNumber > 0.6 && randomNumber < 0.8) {
		tileType = 'water';
	} else {
		tileType = 'sand';
	}

	return tileType;
};

const getGameObject = function() {
	const randomNumber = Math.random();
	let gameObject;

	if (randomNumber < 0.1) {
		gameObject = 'tree';
	} else if (randomNumber > 0.1 && randomNumber < 0.2) {
		gameObject = 'shrub';
	} else if (randomNumber > 0.2 && randomNumber < 0.3) {
		gameObject = 'rock';
	} else {
		gameObject = '';
	}

	return gameObject;
}

const drawMap = function() {
	let tiles = [];
	let gameObjects = [];

	for (let i = -50; i < 50; i++) {
		for (let j = -50; j < 50; j++) {
			tiles.push({
				xPos: i,
				yPos: j,
				tileType: getTileType(),
				gameObject: getGameObject()
			});
		}
	}

	tiles.forEach(function (tile) {
		const gameObject = getGameObject();

		if(gameObject)
			gameObjects.push({
				xPos: tile.xPos,
				yPos: tile.yPos,
				type: gameObject
			});
	});

	return {tiles, gameObjects};
}

const gameMap = drawMap();

router.get('/', function(req, res) {
    res.send(gameMap);
});

module.exports = router;