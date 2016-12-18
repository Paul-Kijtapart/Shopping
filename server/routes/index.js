var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// Exisitng Collections/Models in MongoDB
var products = mongoose.model('products');
var orders = mongoose.model('orders');


router.get('/products', function(req, res, next) {
	// TODO: send ALL products json back to the client
	products.find(function(err, data) {
		if (err) {
			return console.error(err);
		};
		console.log(data);
		res.status(200).send(data);
		res.end();
	})
});


router.get('/', function(req, res) {
	res.send('Hello World');
	res.end();
});



module.exports = router;