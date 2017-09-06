const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')
const multer = require('multer')
const uploadCloudinary = require('../../config/cloudinary')
const path = require('path')

const addProject = require('./handlers/addProject')
const getProject = require('./handlers/getProject')
const getMyProjectProject = require('./handlers/getMyProjectProject')
const addPhotoProject = require('./handlers/addPhotoProject')

const pathUploads = path.join(__dirname, 'upload' )
const upload = multer({ dest: pathUploads })



router
	.route('/')
	.post(upload.single('file'), uploadCloudinary, addProject)
	.get(getProject)

router
	.route('/:id')
	.get(getMyProjectProject)
	.post(upload.single('file'), uploadCloudinary, addPhotoProject)

module.exports = router