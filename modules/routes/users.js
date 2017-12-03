var router = require('express').Router();
var path = require('path');
var Sequelize = require('../../models/sequelize.js');
var Context = require('../../models/context.js');

router.get('/', function(req, res) {
	var users = Context.User.findAll().then(users => {
	  console.log(users);
	});

    res.send(users);
});

module.exports = router;