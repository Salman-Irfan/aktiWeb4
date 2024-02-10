const User = require("../../models/userModel/userModel");

const userLoginController = async(req, res) => {
    const {email, password} = req.body;
    // find for existing user
    const existingUser = await User.findOne({ email: email});
    // if email not found
    if(!existingUser){
        return res.json({
            success: false,
            message: `User not found`
        })
    }
    // if email found, but password not matched
    if (password === existingUser.password){
        return res.json({
            success: true,
            message: `User Logged in sucessfully`
        })
    }else { // if email and password match
        return res.json({
            success: false,
            message: `Either email or password is incorrect`
        })
    }
}

module.exports = userLoginController