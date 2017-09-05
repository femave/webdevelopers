var jwt = require('jsonwebtoken')

function login(req, res) {

  const SECRET = process.env.SECRET
  const { _id: id, username, mail, profileImg } = req.user

  const token = jwt.sign( { id, username, mail, profileImg }, SECRET )

   res.json({success: true, token: token})
}

module.exports = login