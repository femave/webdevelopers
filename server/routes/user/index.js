const express = require('express')
const path = require('path')
const router = express.Router()
const passport = require('../../config/passport')
const multer = require('multer')
const uploadCloudinary = require('../../config/cloudinary')

// handlers
const editProfile = require('./handlers/editProfile')
const getProfile = require('./handlers/getProfile')
const deleteProfile = require('./handlers/deleteProfile')

const pathUploads = path.join(__dirname, 'upload' )
const upload = multer({ dest: pathUploads })


router
	.route('/edit-profile')
	.put(deleteProfile)
	.post(upload.single('file'), uploadCloudinary, editProfile)

router
	.route('/get-profile')
	.get(getProfile)


module.exports = router