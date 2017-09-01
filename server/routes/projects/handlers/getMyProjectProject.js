const User = require('../../../models/User')

function getMyProjectProject (req, res) {

	const {id} = req.params

	User
	.findById(id)
	.populate('projects.projectid')
	.then((data) =>{ 
		console.log(data)
		res.json(data)
	})

}

module.exports = getMyProjectProject