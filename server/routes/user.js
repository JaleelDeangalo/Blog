const express = require("express");
const {check, validationResult} = require("express-validator");
const User = require("../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const normalize = require("normalize-url");
const router = express.Router();


// Sign up
router.post("/signup",
 [
     check("name", "Name is required").notEmpty(),
     check("email", "Please enter a valid email").isEmail(),
     check("password", "Password must be 6 or more characters").isLength({min:6})
 ],
  async(req,res)=>{


    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }


    const {name, email, password} = req.body;


    try {
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({Message: "User already exists please sign in"});
        }

        const avatar = normalize(
            gravatar.url(email, {
                s: "200",
                r:"pg",
                d:"mm"
            }), {forceHttps: true}
        );


        user = new User({
            name,
            email,
            password,
            avatar
        });


        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);

        await user.save();
        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({Message: "Error"});
    }
});

module.exports = router;