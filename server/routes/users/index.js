const express = require('express')
const router = express.Router()

const register = require('./handlers/register')
const getUser = require('./handlers/login')

router
	.route('/register')
	.post(register)

router
	.route('/login')
	.post(getUser)

module.exports = router