var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    exampleKey: Number,
    exampleKey2: String
});

var ExampleModel = mongoose.model('listings', Schema);

module.exports = ExampleModel;