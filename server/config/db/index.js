const mongoose = require('mongoose')
mongoose.Promise = Promise
// const URL_DB = process.env.URL_DB || 'mongodb://localhost:27017/webdevelopers'

const db = mongoose.connection
db.on('error', err => console.log(`Mongoose default connection error: ${err}`))

db.on('disconnected', () => console.log('Mongoose default connection disconnected'))

db.on('connected', function () {
  console.log(`Mongoose default connection open to ${this.host}:${this.port}`)
})

module.exports = db