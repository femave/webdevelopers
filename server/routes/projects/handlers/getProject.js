const Project = require('../../../models/project')

function getProject (req, res) {

  Project
  	.find()
    .then(project => res.json(project))

}

module.exports = getProject