const Project = require('../../../models/project')

function deleteAllProjectPage (req, res) {

	const {id} = req.params

	Project
	.remove({'_id':id})
	.then(project => res.json(project))

}

module.exports = deleteAllProjectPage