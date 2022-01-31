const jwt = require("jsonwebtoken");
const user = require("../models/user");

function newToken(user){
    return jwt.sign({id: user.UserId}, 'relevel', {
        expiresIn :'10d'
    });
}

module.exports ={newToken};