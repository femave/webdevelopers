const Project = require('../../../models/project')
const User = require('../../../models/user')

function addProject (req, res) {
	const { title, tag, dev, shortDesc, longDesc, whyThisProject, creator, creatorName, creatorImg, creatorMail } = req.body

	const project = new Project({ title, tags:tag, developers:dev, shortDescription:shortDesc, longDescription:longDesc, whyThisProject, creator, creatorName, creatorImg, creatorMail })
	project.save()


	const _id = project._id

		User
		.findByIdAndUpdate(creator, {$push: {projects:{projectid: _id}}})
		.then(() => res.json(`/app/#!/project-page/${_id}`))
	
}

module.exports = addProject