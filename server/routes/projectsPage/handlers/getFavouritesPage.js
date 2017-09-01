const User = require('../../../models/User')

function getFavouritesPage (req, res) {

	const {id} = req.params

  User
  .findById(id)
  	.populate('favourites.favouriteid')
  	.then((data) =>{ 
  		// console.log('Data from getFavouritesPage => ', data)
  	  res.json(data)
  	})

  }

  module.exports = getFavouritesPage