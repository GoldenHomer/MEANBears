var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = mongoose.Schema({
	name: String
});

module.exports = mongoose.model('Bear', BearSchema);