var express = require('express');
var router = express.Router();

// Database
var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

// Return true if an object is empty {}
function isEmpty(obj) {
	for (let prop in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, prop)) {
			return false;
		}
	}
	return true;
};

// Send back the singleton order in Order database
router.get('/', function(req, res, next) {
	Order.find({}, function(err, order) {
		if (err) {
			console.error(err);
		}
		res.status(200);
		res.json(order);
	});
});

// Update orders and products collections on user's checkout
router.post('/', function(req, res, next) {
	console.log('req user is ' + req.user);
	console.log(req.user);
	var cart = req.body;
	if (isEmpty(cart)) {
		res.json({
			err: "Please attach a cart object"
		});
	} else {
		// Update the order collection
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

		// Update the product collection
		var cart = JSON.parse(cart.cart);
		for (let productName in cart) {
			Product.update({
				name: productName,
				quantity: {
					$gte: cart[productName]
				}
			}, {
				$inc: {
					quantity: -cart[productName]
				}
			}, function(err, updateStatus) {
				if (err) {
					console.error("Failed at " + productName);
					console.error(err);
				}
				console.log(updateStatus);
			});
		}
	}
});

module.exports = router;