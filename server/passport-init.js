var mongoose = require('mongoose');
var User = mongoose.model('User');
var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

// Configure Stragtegies for each path
module.exports = function(passport) {

	var createHash = function(password) {
		return bCrypt.hashSync(password, bCrypt.genSaltSync(10));
	};

	var isValidPassword = function(user, password) {
		return bCrypt.compareSync(password, user.password);
	};

	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
	passport.serializeUser(function(user, done) {
		console.log('serializing user:', user.username);
		done(null, user._id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			console.log('deserializing user:', user.username);
			done(err, user);
		});
	});

	passport.use('login', new LocalStrategy(
		function(username, password, done) {
			User.findOne({
				username: username
			}, function(err, user) {
				if (err) {
					return done(err);
				}
				if (!user) {
					console.log('User Not Found with username ' + username);
					return done(null, false, {
						message: 'Username does not exist, log the error and redirect back'
					});
				}

				if (!isValidPassword(user, password)) {
					console.log('Invalid Password');
					return done(null, false, {
						message: 'User exists but wrong password, log the error '
					}); // redirect back to login page
				}
				return done(null, user, {
					message: 'User and password both match, return user from done method'
				});
			});
		}));

	passport.use('signup', new LocalStrategy(
		function(username, password, done) {
			User.findOne({
				username: username
			}, function(err, user) {
				if (err) {
					console.error(err);
					return done(err);
				}

				if (user) {
					return done(null, false, {
						message: "Username already existed."
					});
				} else {
					var newUser = new User;
					newUser.username = username;
					newUser.password = createHash(password);
					newUser.save(function(err) {
						if (err) {
							console.log('Error in saving newUser.');
							return done(err);
						}

						return done(null, newUser, {
							message: "newUser is added successfully."
						});
					});
				}
			});
		}));
};