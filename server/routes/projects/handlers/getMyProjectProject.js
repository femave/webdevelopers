const User = require('../../../models/user')

function getMyProjectProject (req, res) {

	const {id} = req.params

	User
	.findById(id)
	.populate('projects.projectid')
	.then((data) =>{ 
		res.json(data)
	})

}

module.exports = getMyProjectProject