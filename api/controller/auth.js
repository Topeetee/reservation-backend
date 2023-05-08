const User = require("../models/User");
const createError = require("../utils/error")
var bcrypt = require('bcryptjs');

const Register = async (req, res, next) => {

    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })
        await newUser.save();
        res.status(200).send("user has been created");
    } catch (err) {
        next(err)
    }
}
const Login = async (req, res, next) => {

    try {
    
        const user = await User.findOne({username:req.body.username});
        if(!user) return next(createError(404, "user not found"));


        const isPasswordCorrect =  await bcrypt .compare( req.body.password, user.password);
        if(!isPasswordCorrect) return next(createError(400, "wrong password or username"))

        const{password,isAdmin, ...otherdDetails} = user._doc;
        res.status(200).send({...otherdDetails});
    } catch (err) {
        next(err)
    }
}
module.exports = { Register,Login };