const express = require('express')
const path = require('path')
const router = express.Router()
const passport = require('../../config/passport')
const multer = require('multer')
const uploadCloudinary = ('../../config/cloudinary')

// handlers
const editProfile = require('./handlers/editProfile')
const getProfile = require('./handlers/getProfile')
const deleteProfile = require('./handlers/deleteProfile')

const pathUploads = path.join(__dirname, 'upload' )
const upload = multer({ dest: pathUploads })

console.log(multer)
console.log(upload)

router.post('/edit-profile', upload.single('file'), uploadCloudinary, editProfile)

router
	.route('/edit-profile')
	.put(deleteProfile)


router
	.route('/get-profile')
	.get(getProfile)


module.exports = router