const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
// const db = require('./config/db/')
const PORT = process.env.PORT || 3000
const URL_DB = process.env.URL_DB || 'mongodb://localhost:27017/webdevelopers'

// const principalPage = require('./routes/principalPage')
const routeProjects = require('./routes/projects/')

mongoose.Promise = Promise
mongoose.connect(URL_DB, {useMongoClient: true})


app.use(express.static(path.join(process.cwd(), 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/projects', routeProjects)

// module.exports = app

app.listen(PORT)
console.log(`Listening at port ${PORT}`)