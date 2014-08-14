var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'); // allows data from a POST method to http to be retrieved

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 4001;

var mongoose = require('mongoose');
mongoose.connect('mongodb://hosay:Snoogan9s@ds055699.mongolab.com:55699/bearz');

var Bear = require('./app/models/bear'); // the bear schema


// ROUTES
var router = express.Router();

router.use(function(req, res, next){
	console.log('testing route for happenings!');
	next(); //go to next route.
});

router.get('/', function (req, res) { // works at localhost:4001/api
	res.json({message: 'Aww yeah, working as expected.'});
});

router.route('/bears').post(function(req, res){
	var bear = new Bear();
	bear.name = req.body.name; // Set name from request.

	bear.save(function(err){
		err ? res.send(err) : res.json({message: 'Bear created'}); // I like to use ternary when possible
	});
});

app.use('/api', router); // all routes will be prefixed with api

app.listen(port);
console.log('Party is on port: ' + port);