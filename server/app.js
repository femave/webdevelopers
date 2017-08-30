const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

const PORT = process.env.PORT || 3000
const URL_DB = process.env.URL_DB || 'mongodb://localhost:27017/webdevelopers'

// const principalPage = require('./routes/principalPage')
const routeProjects = require('./routes/projects/')
const routeProjectsPage = require('./routes/projectsPage/')

const user = require('./routes/users/')

mongoose.Promise = Promise
mongoose.connect(URL_DB, {useMongoClient: true})


app.use(express.static(path.join(process.cwd(), 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.use('/projects', routeProjects)
app.use('/projects-page', routeProjectsPage)

// config
app.use('/user', user)

// module.exports = app

app.listen(PORT)
console.log(`Listening at port ${PORT}`)