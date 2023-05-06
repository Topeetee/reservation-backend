const User = require("../models/User");
var bcrypt = require('bcryptjs');

const Register = async (req, res, next) => {
    const { username, email, password } = req.body
    try {

        //dont forget if there is an error use the password: req.body.password. 
        //it should work
        //goodnight
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);

        const newUser = new User({
            username, email, hash
        })
        await newUser.save();
        res.status(200).send("user has been created");
    } catch (err) {
        next(err)
    }
}
module.exports = { Register };