const Project = require('../../../models/project')

function editProjectPage (req, res) {

	const {id, edit, toggle} = req.body
	console.log(req.body)
	console.log(toggle)

	if(toggle === 'tags'){
		Project
		.update({'_id':id}, {$push: {tags: edit}})
		.then(project => res.json(project))
	} else if(toggle === 'developers'){
		Project
		.update({'_id':id}, {$push: {developers: edit}})
		.then(project => res.json(project))
	} else{
		Project
		.update({'_id':id}, {$set : {[toggle] : edit}})
		.then(project => res.json(project))
	}
}

module.exports = editProjectPage