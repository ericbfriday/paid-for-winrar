myApp.controller('HomeController', function($http) {
    console.log('in home controller');

    var vm = this;
    
    vm.getUsers = function() {
    	$http({
	    	method: 'GET',
	    	url: '/users'
	    }) .then( (response) => {
	    	console.log(response);
	    }).catch( (reason) => {
			console.log(reason);
		});
    }
    
 });