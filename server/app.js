const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

require('dotenv').load()

const PORT = process.env.PORT
const URL_DB = process.env.URL_DB

// routes
const routeProjects = require('./routes/projects/')
const routeProjectsPage = require('./routes/projectsPage/')
const auth = require('./routes/auth/')
const user = require('./routes/user/')

// config
const passport = require('./config/passport/')

// mail
const mail = require('./routes/mail')


mongoose.Promise = Promise
mongoose.connect(URL_DB, {useMongoClient: true})

app.use(express.static(path.join(process.cwd(), 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// config
app.use(passport.initialize())

// user config
app.use('/users', passport.authenticate('jwt', { session: false }), user)

// routes
app.use('/projects', passport.authenticate('jwt', { session: false }), routeProjects)
app.use('/projects-page', passport.authenticate('jwt', { session: false }), routeProjectsPage)
app.use('/user', auth)

// mail
app.use('/sendMail', mail)


app.listen(PORT)
console.log(`Listening at port ${PORT}`)