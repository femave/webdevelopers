const Project = require('../../../models/project')

function addProject (req, res) {
  // const { user } = req
  const { title, tags, developers, shortDescription, longDescription, whyThisProject } = req.body
  // const id = user._id
  console.log(req.body, req.params)

  const project = new Project({ title, tags, developers, shortDescription, longDescription, whyThisProject })

  project.save()
    .then(() => res.redirect('/app/#!/start-project'))

}

module.exports = addProject