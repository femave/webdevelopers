const User = require('../../../models/User.js')

function deleteFavouritePage (req, res) {

	const {id} = req.body

	User
	.update({}, {$pull: {favourites: {favouriteid: id}}}, { multi: true })
	.then((info) => { 
		res.send({
			result: 'DELETION_OK',
			data: info
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