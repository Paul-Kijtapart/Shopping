// Declare modules to be used here
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var favicon = require('serve-favicon');

// Dependencies:
require('./models/models');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ShoppingMall'); // TODO: add this db and collections

var app = express();

// Functions executed every time the app receives a request.
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); // uncomment after placing your favicon in /public
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'images')));
app.use('/products', function(req, res, next) {
	// console.log('Request URL:', req.originalUrl);
	// console.log('Request baseURL:' + req.baseUrl);
	// console.log('Request path: ', req.path);

	next()
}, function(req, res, next) {
	// console.log('Request Type:', req.method)
	next()
});

// Bind routers to each path
var products = require('./routes/products');
var checkout = require('./routes/checkout');
app.use('/products', products);
app.use('/checkout', checkout);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.send({
			status: err.status,
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.send({
		status: err.status,
		message: err.message,
		error: {}
	});
});

// START SERVER=============================================================
var debug = require('debug')('Shopping:server');
var http = require('http');


/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(app.get('port'), function() {
	console.log('Server is running at localhost:' + app.get('port'));
});
server.on('error', onError);
server.on('listening', onListening);


/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
	var addr = server.address();
	var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
	debug('Listening on ' + bind);
}