const Project = require('../../../models/project')


function addPhotoProject (req, res) {
	const {id} = req.params
	const img = req.body.file

	console.log('id ===============>   ',req.params)

	Project
	.update({'_id' : id}, {$set: {'projectImage' : img}})
	.then((data) =>{
		res.json(data)
	})
	
}

module.exports = addPhotoProject