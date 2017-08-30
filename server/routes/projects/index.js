const express = require('express')
const router = express.Router()

const addProject = require('./handlers/addProject')
const getProject = require('./handlers/getProject')
const getMyProjectProject = require('./handlers/getMyProjectProject')

router
	.route('/')
	.post(addProject)
	.get(getProject)

router
	.route('/:id')
	.get(getMyProjectProject)

module.exports = router