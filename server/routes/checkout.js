var express = require('express');
var router = express.Router();

// Parse Request object before handlers start working
var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
	extended: false
})

// Database
var mongoose = require('mongoose');
var orders = mongoose.model('orders');

/**
1.	accept a JSON formatted object (cart) and 
	total as parameters that you will need to store in your orders table.

2. also update your products table (Deduct the value in the products table according to cart) 
3. Update clients on Updated products and re-set the cart.
*/
router.post('/', urlencodedParser, jsonParser, function(req, res, next) {
	res.send({
		'checkout': 'checkout success'
	});
});

module.exports = router;