var express = require('express');
var router = express.Router();

// Database 
var mongoose = require('mongoose');
var Product = mongoose.model('Product');

// Return products in given categories and price between minPrice and maxPrice
router.get('/category/:category/price', function(req, res, next) {
	var category = req.params.category;
	var minPrice = req.query.minPrice;
	var maxPrice = req.query.maxPrice;

	if (category) {
		try {
			category = JSON.parse(category);
		} catch (err) {
			console.log('category should be an array.');
			console.error(err + "please check category url");
		}

		if (maxPrice && minPrice) {
			console.log('Sending products with ' + category);
			console.log('price between ' + minPrice + ' <= ' + 'price' + ' <= ' + maxPrice);
			Product.find({
				category: {
					$in: category
				},
				price: {
					$gte: minPrice,
					$lte: maxPrice
				}
			}, function(err, products) {
				if (err) {
					console.error(err);
				};
				res.status(200);
				res.json(products);
			});
		} else {
			console.log('Sending products with ' + category);
			Product.find({
				category: {
					$in: category
				}
			}, function(err, products) {
				if (err) {
					console.error(err);
				}

				res.status(200);
				res.json(products);
			});
		}
	} else {
		// Looking at all products
		console.log('category ' + category);
		if (maxPrice && minPrice) {
			console.log('Sending All products with price between ' + minPrice + ' <= ' + 'price' + ' <= ' + maxPrice);
			Product.find({
				price: {
					$gte: minPrice,
					$lte: maxPrice
				}
			}, function(err, products) {
				if (err) {
					console.error(err);
				};
				res.status(200);
				res.json(products);
			});
		} else {
			res.status(500);
			var err = new Error('minPrice or maxPrice is missing.');
			res.send({
				status: err.status,
				message: err.message,
				error: err
			});
		}
	}
});

// Send Products whose field matches the params category
// otherwise send back all products
router.get('/cateogry/:category', function(req, res, next) {
	var category = req.params.category;
	console.log('category: ' + category);
	if (category) {
		category = JSON.parse(category);
		console.log('Sending products with ' + category);
		Product.find({
			category: {
				$in: category
			}
		}, function(err, products) {
			if (err) {
				console.error(err);
			}

			res.status(200);
			res.json(products);
		});
	} else {
		console.log('Sending back all products');
		Product.find(function(err, products) {
			if (err) {
				console.error(err);
			};
			res.status(200)
			res.json(products);
		});
	}
});

// Send Products with minPrice <= Product.price <= maxPrice
router.get('/price', function(req, res, next) {
	var minPrice = req.query.minPrice;
	var maxPrice = req.query.maxPrice;
	console.log('price only');

	if (maxPrice && minPrice) {
		console.log('Sending All products with ' + minPrice + ' <= ' + 'price' + ' <= ' + maxPrice);
		Product.find({
			price: {
				$gte: minPrice,
				$lte: maxPrice
			}
		}, function(err, products) {
			if (err) {
				console.error(err);
			};
			res.status(200);
			res.json(products);
		});
	} else {
		res.status(500);
		var err = new Error('minPrice or maxPrice is missing.');
		res.send({
			status: err.status,
			message: err.message,
			error: err
		});
	}
});

// CRUD opertaions with productName
router.route('/name/:productName')
	.get(function(req, res, next) {
		var productName = req.params.productName;
		console.log(productName);
		Product.findOne({
			name: productName
		}, function(err, product) {
			if (err) {
				console.error(err);
			}
			res.status(200);
			res.json(product);
		});
	})
	.post(function(req, res, next) {
		console.log('TODO: add product with productName');
	})
	.put(function(req, res, next) {
		console.log('TODO: Put: update with productName');
	})
	.delete(function(req, res, next) {
		var productName = req.params.productName;
		Product.remove({
			name: productName
		}, function(err, deleteStatus) {
			if (err) {
				console.error(err);
			}
			res.status(200);
			res.json(deleteStatus);
		});
	});

// Return all products in DB
router.get('/', function(req, res, next) {
	console.log('Sending all products');
	Product.find({}, function(err, products) {
		if (err) {
			console.error(err);
		}
		res.status(200);
		res.json(products);
	});
});

module.exports = router;