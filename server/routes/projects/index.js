const express = require('express')
const router = express.Router()

const addProject = require('./handlers/addProject')
const getProject = require('./handlers/getProject')

router.post('/', addProject)
router.get('/', getProject)

module.exports = router