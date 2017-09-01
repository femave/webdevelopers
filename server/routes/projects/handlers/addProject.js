const Project = require('../../../models/project')
const User = require('../../../models/User')

function addProject (req, res) {
  const { title, tag, dev, shortDesc, longDesc, whyThisProject } = req.body
  console.log(req.body)

  const project = new Project({ title, tags:tag, developers:dev, shortDescription:shortDesc, longDescription:longDesc, whyThisProject })
  console.log(project)
  project.save()


  const _id = project._id

  const username = 'marc'
  User
  	.findOneAndUpdate({'username' : username}, {$push: {projects:{projectid: _id}}})
  	.then(() => res.json(`/app/#!/project-page/${_id}`))

}

module.exports = addProject