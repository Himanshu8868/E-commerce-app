const jwt = require('jsonwebtoken');
const JWT_SECRET = "Himanshuu@12"

const Fetchuser = (req, res, next) => {
    //Get the user from jwt token and add  id to req  //
    const token = req.header('auth-token');
    if (!token) {
        res.status(404).send({ error: "Acces Denied ! please Authenticate a valid token" })
    }
    try { 
        const data= jwt.verify(token , JWT_SECRET)
        req.user = data.user;
        next();
    }catch(error){
         res.status(401).send({error: "Invalid Token" })
    }
  

}
module.exports = Fetchuser; 