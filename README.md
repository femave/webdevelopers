# webdevelopers


[![HTML5,CSS3 and JS](https://github.com/FransLopez/logo-images/blob/master/logos/html5-css3-js.png)](http://www.w3.org/) [![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)  [![Bootstrap](https://github.com/FransLopez/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)  [![SASS](https://github.com/FransLopez/logo-images/blob/master/logos/sass.png)](http://sass-lang.com/)  [![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/) [![Skylab](https://github.com/FransLopez/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)
[![MongoDB](https://github.com/FransLopez/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)
![Monogoose](https://github.com/MarioTerron/logo-images/blob/master/logos/mongoose.png)
[![NodeJS](https://github.com/MarioTerron/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![ExpressJS](https://github.com/MarioTerron/logo-images/blob/master/logos/expressjs.png)](http://expressjs.com///)
 
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

---

### What is project about

- Its a collaboration projects website, dedicated for developers that have an idea but have not team or money to do their projects. The idea is to create a community that a developer can upload some project idea and explain what is about and if he need some other developer to other tasks like design or others that they did not know to do, and some other developer of the comunity can see the project, and if its interested in his project and have the requisits thats demand apply to do the project in the team.

---

### Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/), [bower](https://bower.io/) and [MongoDB](https://www.mongodb.com/)

### Configuration `env` file

You need to create an **.env** file in the project root with the following environment variables configured:

- Port:

  ```
  PORT=3000
  ```

- Mongodb path and database to use:

  ```
  DB_URI=mongodb://localhost:27017/NAME_DB
  ```

- Secret word to encrypt users' passwords:

  ```
  SECRET=XXXXXXXXXXXXXXXXXXXXXX
  ```
  
- Gmail account:

  ```
  MAILPASS=YOUR_MAIL_PASS
  ```
  
  ```
  MAILUSER=YOUR_MAIL_USER
  ```
  
- Cloudinary account

  ```
  CLOUD_NAME=YOUR_CLOUDINARY_NAME
  ```
  ```
  CLOUDINARY_API_KEY=CLOUDINARY_API_KEY
  ```
  ```
  CLOUDINARY_API_SECRET=CLOUDINARY_API_SECRET
  ```

---

### To run the server:

```
$ npm run dev
```


All dependencies will be installed automatically

---
## Built with:

- **Front-end**

    "bootstrap": "^3.3.7",
    "angular": "^1.6.6",
    "angular-route": "^1.6.6",
    "font-awesome": "^4.7.0",
    "ngSweetAlert": "latest",
    "ng-tags-input": "3.2.0",
    "angular-jwt": "^0.1.9",
    "ng-file-upload": "^12.2.13",
    "AngularJS-Toaster": "angularjs-toaster#^2.2.0"

- **Back-end**

  "body-parser": "^1.17.2",
    "bower": "^1.8.0",
    "cloudinary": "^1.9.0",
    "del": "^3.0.0",
    "dotenv": "^4.0.0",
    "express": "^4.15.4",
    "jsonwebtoken": "^7.4.3",
    "mongoose": "^4.11.9",
    "multer": "^1.3.0",
    "node-sass": "^4.5.3",
    "nodemailer": "^4.1.0",
    "passport": "^0.4.0",
    "passport-jwt": "^3.0.0",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^4.2.1"
    
    ---
    ## Authors

[Marc Vergara](https://github.com/femave)

## Acknowledgments

- [SkylabCoders](https://github.com/SkylabCoders)
- [JuanMa Garrido](https://github.com/juanmaguitar)
- [manuelbarzi](https://github.com/manuelbarzi)
