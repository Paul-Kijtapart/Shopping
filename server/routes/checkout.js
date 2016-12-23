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
router.use(urlencodedParser);
router.use(jsonParser);

// Database
var mongoose = require('mongoose');
var Order = mongoose.model('Order');

/**
1.	accept a JSON formatted object (cart) and 
	total as parameters that you will need to store in your orders table.

2. also update your products table (Deduct the value in the products table according to cart) 
3. Update clients on Updated products and re-set the cart.
*/
router.post('/', function(req, res, next) {
	var cart = req.body;
	Order.update({
		_id: "1"
	}, {
		$set: {
			cart: cart.cart,
			total: cart.total
		}
	}, {
		upsert: true
	}, function(err, updateStatus) {
		if (err) {
			console.error(err);
		}
		res.status(200);
		res.send(updateStatus);
	});
});

module.exports = router;