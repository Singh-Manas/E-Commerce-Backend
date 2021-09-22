var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks');
var {register, registerSuperAdmin} = require('../controllers/register');
var check = require('../middlewares/checkSuperAdmin');

/* GET home page. */
router.get('/', function(req, res, next) {
  const sess = req.session;
  sess.username = 'rachit';
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  console.log('Redis Value: ', req.session.username);
  // res.render('index', { title: 'Express' });
});

/** 
* @requires { fullName, email, password, confirmPassword} - req.body
* @description
* Security, Performance, Edge Cases
* Level - 1
* Email Validate (string) - @, . 
* Password Validate - Min 6, 1 Uppercase, 1 Lowercase, 1 Special Character
* password == confirmPassword
* Level - 2 
* JS / SQL Injection - THA
* Level - 3
* Check if Email already exists
* Password Hash
* Email Lower Case - rachit@gmail.com / Rachit@gmail.com
* Save in database - Install sequelize for Database Connectivity (npm install --save sequelize)
*/

router.post('/register', registerInitialCheck, register);
router.post('/register-super-admin', registerInitialCheck, registerSuperAdmin);
router.get('/super', check);

module.exports = router;
