var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'); // allows data from a POST method to http to be retrieved

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 4001;

var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect(' mongodb://hosay:Snoogan9s@ds055699.mongolab.com:55699/bearz');

var Bear = require('./app/models/bear'); // the bear schema

router.get('/', function (req, res) {
	res.json({message: 'Aww yeah, working as expected.'});
});

app.use('/api', router); // all routes will be prefixed with api

app.listen(port);
console.log('Party is on port: ' + port);