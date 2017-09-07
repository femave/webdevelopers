const nodemailer = require('nodemailer');
// const transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

const MAILUSER = process.env.MAILUSER
const MAILPASS = process.env.MAILPASS


function sendMail (req, res){

const {user, creatorMail, creatorName} = req.body


var transporter = nodemailer.createTransport(`smtps://${MAILUSER}%40gmail.com:${MAILPASS}@smtp.gmail.com`);

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"No reply" <webdevelopermarc@gmail.com>', // sender address
    to: creatorMail, // list of receivers
    subject: 'From your project in webdevelopers', // Subject line
    text: `Hi ${creatorName}, ${user} want to join in the project with you!`, // plaintext body
  };

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
	if(error){
		return console.log(error);
	}
	res.json({
		message: 'Mail sended correctly'
	})
});



}

module.exports = sendMail