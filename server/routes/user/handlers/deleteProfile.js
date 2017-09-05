const User = require('../../../models/user')


function deleteProfile (req, res) {

	let {edit} = req.body
	let {_id} = req.user

	console.log(req.body)
	console.log(req.body.edit)

	User
	.update({'_id' : _id}, {$pull: {lenguages: {lenguages: edit}}})
	.then(leng => res.json(leng))
	


}

module.exports = deleteProfile