const User = require('../../../models/User')

function addFavouritePageMid (req, res, next) {

	const {idUser} = req.body
	const {id} = req.params
	console.log(idUser, '    id _>', id)

	User
	.findById(idUser, {favourites: {$elemMatch :{favouriteid: id}}})
	// .populate('favourites.favouriteid')
	.then((info) => {
		// console.log('info =>  ', info.favourites, ' <=end info')
		if(info.favourites.length !== 0){
			res.send({
				result: 'ADDED_FAVOURITES ALREADY',
				data: info
			})
		}else next()
	})

}

module.exports = addFavouritePageMid