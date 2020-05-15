const express = require("express");
const {check, validationResult} = require("express-validator");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const secret = require("../config/db").jwtSecret;
const bcrypt = require("bcryptjs");
const router = express.Router();


// Login
router.post("/signin", 
[
    check("email", "Email is required").isEmail(),
    check("password", "Password is requred").notEmpty()
],
 async(req,res) => {

const errors = validationResult(req);

if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}

const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({Message: "Email or password is invalid"});
        }

        const isMatched = await bcrypt.compare(password, user.password);

        if(!isMatched){
            return res.status(400).json({Message: "Email or password is invalid"});
        }

        const Payload = {
            user:{
                id: user.id
            }
        };


        const token = jwt.sign(Payload, secret);
        res.cookie("t", token, {expire: new Date() + 9999});
        return res.status(200).json({token, user});
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: "Error"});
    }
});

//Logout
router.get("/logout",(req,res) => {
    try {
         res.clearCookie("t");
         res.json({Message: "Logged out"})
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: "Error"});
    }
});


module.exports = router;