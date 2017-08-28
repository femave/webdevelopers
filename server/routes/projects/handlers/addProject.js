const Project = require('../../../models/project')

function addProject (req, res) {
  const { title, tag, dev, shortDesc, longDesc, whyThisProject } = req.body
  console.log(req.body)

  const project = new Project({ title, tags:tag, developers:dev, shortDescription:shortDesc, longDescription:longDesc, whyThisProject })
  console.log(project)
  project.save()
    .then(() => res.redirect('/app/#!/start-project'))

}

module.exports = addProject