const User = require('../../../models/user.js')

function deleteFavouritePage (req, res) {

	const {id} = req.body
	console.log('hi?')

	User
	.update({}, {$pull: {favourites: {favouriteid: id}}}, { multi: true })
	.then((info) => { 
		console.log('delete reference from user confirmation', info) 

		res.send({
			result: 'DELETION_OK',
		})
	})
	.catch(err => {
		res.send({
			result: 'DELETION_KO',
			error: err
		})
	})

}

module.exports = deleteFavouritePage