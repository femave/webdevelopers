const Project = require('../../../models/project')

function getProjectPage (req, res) {

	const {id} = req.params
	const idUser = req.user._id
	console.log(req.user._id)

	Project
	.findOne({'_id':id})
	.then(project => {
		console.log(idUser, '   id creator=>', project.creator)
			if (idUser == project.creator){
						res.json({
							data: project,
							succes: true,
							creator: true
						})
					}else{
						res.json({
							data: project,
							succes: true,
							creator: false
						})
					}
			})

}

module.exports = getProjectPage