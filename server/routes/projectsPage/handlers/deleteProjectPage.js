const Project = require('../../../models/project')

function deleteProjectPage (req, res) {

	const {id, edit, toggle} = req.body
	let sEdit = edit.toString()
	console.log(edit)
	if(toggle === 'tags'){
		Project
		.update({'_id':id}, {$pull: {tags: sEdit}})
		.then(project => res.json(project))
	} else if(toggle === 'developers'){
		Project
		.update({'_id':id}, {$pull: {developers: sEdit}})
		.then(project => res.json(project))
	}
}

module.exports = deleteProjectPage