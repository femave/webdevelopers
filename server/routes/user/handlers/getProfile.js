const User = require('../../../models/user')

function getProjectPage (req, res) {

	const idUser = req.user._id

	User
	.findOne({'_id':idUser})
	.then(user => {
		res.json({
			data: user,
			succes: true
		})
	})
}

module.exports = getProjectPage