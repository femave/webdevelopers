const cloudinary = require('cloudinary')
const del = require('del')
const uploadFolderPath = process.env.UPLOAD_FOLDER

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

function uploadCloudinary (req, res, next) {
  console.log(req.file)
  if (req.file) {
    cloudinary.uploader.upload(req.file.path, ({ url }) => {
      console.log(url)
      if (url) {
        req.body.file = url
        del.sync([`${uploadFolderPath}/**`, `!${uploadFolderPath}`])
        next()
      } else {
        res.status(404).send('Oh uh, something went wrong')
      }
    })
  } else {
    next()
  }
}

module.exports = uploadCloudinary