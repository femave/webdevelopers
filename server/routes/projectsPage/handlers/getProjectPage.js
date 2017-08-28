const Project = require('../../../models/project')

function getProjectPage (req, res) {

	const {id} = req.params
	console.log(id)

  Project
  	.findOne({'_id':id})
    .then(project => res.json(project))

}

module.exports = getProjectPage