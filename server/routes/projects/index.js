const express = require('express')
const router = express.Router()

const addProject = require('./handlers/addProject')
// const getTasks = require('./handlers/getTasks')
// const updateTasks = require('./handlers/updateTasks')
// const getTasksCompleted = require('./handlers/getTasksCompleted')


router.post('/', addProject)
// router.get('/', getTasks)
// router.put('/', updateTasks)
// router.get('/completed', getTasksCompleted)

module.exports = router