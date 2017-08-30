const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const collection = 'user'

var UserSchema = new mongoose.Schema({
  username: {type:String, required:true},
  password: {type:String, required:true},
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
}, { collection })


// const UserModel = mongoose.model('UserModel',UserSchema);

// UserSchema.pre('save', function (next) {
//     var self = this;
//     UserModel.find({username : self.username}, function (err, docs) {
//         if (!docs.length){
//             next();
//         }else{                
//             console.log('user exists: ',self.username);
//             next(new Error("User exists!"));
//         }
//     });
// });

module.exports = mongoose.model('user', UserSchema);