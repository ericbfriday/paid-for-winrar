var express = require('express');
var router = require('express').Router();
var bodyParser = require( 'body-parser');
// var path = require('path');
// var mongoose = require('mongoose');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

// Start Code Here - Add dependecies as needed






module.exports = router;