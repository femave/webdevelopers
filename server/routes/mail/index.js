const express = require('express');
const router = express.Router();
const sendMail = require('./handlers/sendMail')

console.log(sendMail)
router
	.route('/')
	.post(sendMail)

module.exports = router
