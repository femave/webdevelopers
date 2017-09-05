const User = require('../../../models/user')


function editProfile (req, res) {
  
	let {edit, toggle} = req.body
	let img = req.body.file
	let {_id} = req.user

	// console.log(req.body)
	console.log(req.body.file)


	if(toggle === 'username'){
		User
			.update({'_id' : _id}, {$set: {'username' : edit}})
			.then(username => res.json(username))
	}else if ( toggle === 'mail'){
		User	
			.update({'_id' : _id}, {$set: {'mail' : edit}})
			.then(mail => res.json(mail))
	}else if( toggle === 'lenguages'){
		User
			.update({'_id' : _id}, {$push: {lenguages: {lenguages: edit}}})
			.then(leng => res.json(leng))
	}else{
		User
			.update({'_id' : _id}, {$set: {'profileImg' : img}})
			.then(img => res.json(img))
	}	


}

module.exports = editProfile