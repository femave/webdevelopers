const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

// handlers
const getProjectPage = require('./handlers/getProjectPage')
const editProjectPage = require('./handlers/editProjectPage')
const deleteProjectPage = require('./handlers/deleteProjectPage')
const deleteAllProjectPage = require('./handlers/deleteAllProjectPage')
const addFavouritesPage = require('./handlers/addFavouritesPage')
const getFavouritesPage = require('./handlers/getFavouritesPage')
const deleteFavouritePage = require('./handlers/deleteFavouritePage')

// midlewares
const addFavouritePageMid = require ('./midleware/addFavouritePageMid')


// router.use( passport.authenticate('jwt', { session: false }) )

router
	.route('/')
	.post(editProjectPage)
	.put(deleteProjectPage)

router
	.route('/favourites')
	.put(deleteFavouritePage)

router
	.route('/:id')
	.get(getProjectPage)
	.delete(deleteAllProjectPage)
	.post(addFavouritePageMid, addFavouritesPage)

router
	.route('/favourites/:id')
	.get(getFavouritesPage)


module.exports = router