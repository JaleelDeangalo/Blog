const jwt = require("jsonwebtoken");
const secret = require("../config/db").jwtSecret;

 const auth = ( req, res, next ) => {

    const token = request.header("x-auth-token");

    if(!token){
        return res.status(401).json({Message: "No, Token Access Denied"});
    }

    try {
        jwt.verify(token, secret , (error, decoded) => {
            if(error){
                return res.status(401).json({Message: "Token not valid"});
            }

            req.user = decoded.user;
            next();
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({Message: "Error"});
    }
};


 const admin = ( req, res, next ) => {
    if(req.profile.role === 0){
        return res.status(403).json({Message: "Not Authorized"});
    }
    next();
}

module.exports = {auth},{admin};