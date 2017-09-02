const User = require('../../../models/User')

function register(req, res) {
  const { username, password, mail } = req.body

  const user = new User({username, mail})

  User.register(user, password, err => {
    if (err) {
      return res.json({ success: false, msg: 'Username already exists.' })
    }
    res.redirect('/app')
  })

}

module.exports = register