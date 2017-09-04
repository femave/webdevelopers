const Project = require('../../../models/project')
const User = require('../../../models/user.js')

function deleteAllProjectPage (req, res) {

	const {id} = req.params

	User
	.update({}, {$pull: {favourites: {favouriteid: id}}}, { multi: true })
	.then((info) => console.log('delete reference from user confirmation', info))

	User
	.update({}, {$pull: {projects: {projectid: id}}}, { multi: true })
	.then((info) => console.log('delete reference from user confirmation', info))

	Project
	.remove({'_id':id})
	.then(project => res.json(project))

}

module.exports = deleteAllProjectPage