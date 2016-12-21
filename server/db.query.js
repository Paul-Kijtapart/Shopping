// Database 
var mongoose = require('mongoose');
var products = mongoose.model('products');



// var ProductDB = {
// 	getAll: function() {
// 		var result = null;
// 		products.find(function(err, data) {
// 			if (err) {
// 				return console.error(err);
// 			};
// 			// console.log('inside getall');
// 			// console.log(data);
// 			result = data;
// 		})
// 		return result;
// 	},
// 	getProdcutWtihCategory: function(category) {

// 	},
// 	getProductWithPriceRange: function(minPrice, maxPrice) {

// 	}
// };


function getAll() {
	var result;
	products.find(function(err, data) {
		if (err) {
			return console.error(err);
		};
		// console.log('inside getall');
		// console.log(data);
		result = data;
	})
	console.log('hi');
	console.log(result);
	return result;
};

module.exports = getAll