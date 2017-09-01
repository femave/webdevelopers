const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const collection = 'user'

const UserSchema = new Schema({
	mail: {type: String, required:true}
}, {collection})

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', UserSchema)