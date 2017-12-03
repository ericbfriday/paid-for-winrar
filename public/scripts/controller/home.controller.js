myApp.controller('HomeController', function($http) {
    const vm = this;

    vm.map = {
        tiles: [],
        gameObjects: []
    };
    vm.canvas = new Canvas(document.getElementById("canvas"));

    vm.step = function(timeStamp) {
        vm.canvas.draw(timeStamp);
    	window.requestAnimationFrame(vm.step);
    }

    vm.startGame = function() {
        vm.getMap();
    	setInterval(vm.getMap, 1000);
		vm.step();
    }

    vm.getMap = function() {
    	$http({
	    	method: 'GET',
	    	url: '/getMap'
	    }) .then( (response) => {
	    	vm.map.tiles = response.data.tiles;
	    	vm.map.gameObjects = response.data.gameObjects;
            
            vm.canvas.prepareMap(vm.map);
	    }).catch( (reason) => {
			console.log(reason);
		});
    }
 });