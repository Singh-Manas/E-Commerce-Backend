const { emailValidate, passwordValidate } = require('../utils/validate');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @description
 * * Email Validate (string) - @, . 
 * Password Validate - Min 6, 1 Uppercase, 1 Lowercase, 1 Special Character
 * password == confirmPassword
 */

const registerInitialCheck = (req, res, next) => {
    const {email, password, confirmPassword} = req.body;
    // console.log(email);
    // console.log(emailValidate(email));
    // console.log(passwordValidate(password));
    if(
        typeof email === 'string' &&
        typeof password === 'string' &&
        typeof confirmPassword === 'string' && 
        email.length > 0 &&
        password.length > 8 && 
        confirmPassword === password &&
        emailValidate(email) &&
        passwordValidate(password)
    ) {
        next();
    } else {
        res.status(401).send("Initial Checks Failed");
    }
};

module.exports = registerInitialCheck;