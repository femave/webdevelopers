const Project = require('../../../models/project')
const User = require('../../../models/User')

function addProject (req, res) {
  const { title, tag, dev, shortDesc, longDesc, whyThisProject, creator } = req.body
  console.log(req.body)

  const project = new Project({ title, tags:tag, developers:dev, shortDescription:shortDesc, longDescription:longDesc, whyThisProject, creator })
  console.log(project)
  project.save()


  const _id = project._id

  // const username = 'marc'
  User
  	.findByIdAndUpdate(creator, {$push: {projects:{projectid: _id}}})
  	.then(() => res.json(`/app/#!/project-page/${_id}`))

}

module.exports = addProject