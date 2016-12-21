var express = require('express');
var router = express.Router();
var getAll = require('../db.query');

/*
PRICE RANGE INPUT
1. 	Add price filters to your /products endpoint to 
	allow users to retrieve all products 
	between a specified price range (inclusive)

2.	need to carefully consider checking erroneous values in your filters - 
	if an erroneous filter is supplied, an error response with an appropriate HTTP error code should be returned.

a: 	If no filters are supplied to the GET products endpoint, all products should be returned in the response. 
b: 	If filters are supplied, a subset of the products should be returned according to the conditions.
*/

/**
CATEGORY SELECTED
1.	Examples include "Clothing" and "Stationary". 
2.	Implement a filter on your server application to return products belonging to a certain cateogry 
3.	and display only those products on the client side when interfacing with the navigation menu.

*/

// Price?minPrice=2&maxPrice=30

// Send Products whose field matches the query category
// otherwise send back all products
router.get('/', function(req, res, next) {
	// products.find(function(err, data) {
	// 	if (err) {
	// 		return console.error(err);
	// 	};
	// 	res.status(200).send(data);
	// })

	// console.log(getAll());
	res.status(200).send(getAll());
});

// Send Products whose field matches the query category


// Send Products with minPrice <= Product.price <= maxPrice
router.get('/Price', function(req, res, next) {
	var minPrice = req.query.minPrice;
	var maxPrice = req.query.maxPrice;

	if (!(maxPrice && minPrice)) {
		res.status(200);
		res.send('minPrice or maxPrice is missing.');
	}

	res.send({
		minPrice: minPrice,
		maxPrice: maxPrice
	});
});



module.exports = router;