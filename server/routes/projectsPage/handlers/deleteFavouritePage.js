const User = require('../../../models/user.js')

function deleteFavouritePage (req, res) {

	const {id} = req.body
	console.log('hi?')

	User
	.update({}, {$pull: {favourites: {favouriteid: id}}}, { multi: true })
	.then((info) => console.log('delete reference from user confirmation', info))

}

module.exports = deleteFavouritePage