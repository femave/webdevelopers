const express = require('express');
const router = express.Router();
const sendMail = require('./handlers/sendMail')

router
	.route('/')
	.post(sendMail)

module.exports = router
