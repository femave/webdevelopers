const Project = require('../../../models/project')
const User = require('../../../models/user')

function addFavouritesPage (req, res) {

	const {idUser} = req.body
	const {id} = req.params

	User
	.findByIdAndUpdate(idUser, {$push: {favourites:{favouriteid: id}}})
	.then((info) => {
		console.log(info)
		res.json(`Added to favourites`)})

}

module.exports = addFavouritesPage