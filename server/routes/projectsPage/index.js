const express = require('express')
const router = express.Router()

const getProjectPage = require('./handlers/getProjectPage')
const editProjectPage = require('./handlers/editProjectPage')
const deleteProjectPage = require('./handlers/deleteProjectPage')
const deleteAllProjectPage = require('./handlers/deleteAllProjectPage')

router.post('/', editProjectPage)
router.get('/:id', getProjectPage)
router.put('/', deleteProjectPage)
router.delete('/:id', deleteAllProjectPage)

module.exports = router