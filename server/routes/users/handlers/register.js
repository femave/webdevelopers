const User = require('../../../models/user')

function addUser (req, res) {
  const { username, mail, password } = req.body
  console.log(req.body)

  const project = new User({ username, mail, password })
  // console.log(project)
  project.save()
    .then(() => res.redirect('/app/#!'))

}


module.exports = addUser