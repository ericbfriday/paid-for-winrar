myApp.controller('HomeController', function($http) {
    const vm = this;

    let tiles = [];
    let gameObjects = [];
    let canvas = null;

    vm.step = function(timeStamp) {
        vm.canvas.draw(timeStamp);
    	window.requestAnimationFrame(vm.step);
    }

    vm.startGame = function() {
    	vm.canvas = new Canvas(document.getElementById("canvas"));
        vm.getMap();
    	setInterval(vm.getMap, 1000);
		vm.step();
    }

    vm.getMap = function() {
    	$http({
	    	method: 'GET',
	    	url: '/getMap'
	    }) .then( (response) => {
	    	tiles = response.data.tiles;
	    	gameObjects = response.data.gameObjects;
	    }).catch( (reason) => {
			console.log(reason);
		});
    }
 });