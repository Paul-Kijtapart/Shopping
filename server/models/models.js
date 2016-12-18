var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	name: String,
	price: Number,
	quantity: Number,
	image: String
});

var orderSchema = new Schema({
	cart: String,
	total: Number
});

// Map Schemas above to our existing collections in ShoppingMall Database
mongoose.model('products', productSchema);
mongoose.model('orders', orderSchema);