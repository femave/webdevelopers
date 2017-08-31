const User = require('../../../models/user')

function getFavouritesPage (req, res) {

	const {id} = req.params

  User
  .findById(id)
  	.populate('favourites.favouriteid')
  	.then((data) =>{ 
  		// console.log(data)
  	  res.json(data)
  	})

  }

  module.exports = getFavouritesPage