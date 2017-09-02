const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId
const collection = 'user'

const UserSchema = new Schema({
  mail: {type:String, required:true},
  projects: [{
  	projectid:{
  		type: ObjectId,
  		ref: 'project'
  	}
  }],
  favourites: [{
  	favouriteid:{
  		type: ObjectId,
  		ref: 'project'
  	}
  }]

}, {collection})

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', UserSchema)