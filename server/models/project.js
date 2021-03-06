const mongoose = require('mongoose');
const collection = 'project'

var ProjectSchema = new mongoose.Schema({
  title: String,
  tags: [ String ],
  developers: [ String ],
  shortDescription: { type: String, max: 120 },
  longDescription: String,
  whyThisProject: {type:String, default: ''},
  projectImage: String,
  creator: String,
  creatorName: String,
  creatorImg: String,
  creatorMail: String
}, { collection })

module.exports = mongoose.model('project', ProjectSchema);