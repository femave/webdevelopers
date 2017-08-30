const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../../models/user')

function getUser(req, res){

	const { username, password } = req.body

	User.findOne({ username: username }, function(err, user) {
		if (err) { return done(err); }
		if (!user) {
			return done(null, false, { message: 'Incorrect username.' });
		}
		if (!user.password(password)) {
			return done(null, false, { message: 'Incorrect password.' });
		}
		return done(null, user);
	});
}


module.exports = getUser