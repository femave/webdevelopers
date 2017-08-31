const express = require('express')
const router = express.Router()

const getProjectPage = require('./handlers/getProjectPage')
const editProjectPage = require('./handlers/editProjectPage')
const deleteProjectPage = require('./handlers/deleteProjectPage')
const deleteAllProjectPage = require('./handlers/deleteAllProjectPage')
const addFavouritesPage = require('./handlers/addFavouritesPage')
const getFavouritesPage = require('./handlers/getFavouritesPage')
const deleteFavouritePage = require('./handlers/deleteFavouritePage')

router
	.route('/')
	.post(editProjectPage)
	.put(deleteProjectPage)

router
	.route('/:id')
	.get(getProjectPage)
	.delete(deleteAllProjectPage)
	.post(addFavouritesPage)

router
	.route('/favourites/:id')
	.get(getFavouritesPage)

router
	.route('/favourites')
	.post(deleteFavouritePage)


module.exports = router