const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const PORT = 3000

const principalPage = require('./routes/principalPage')

app.use(express.static(path.join(process.cwd(), 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.listen(PORT)
console.log(`Listening at port ${PORT}`)