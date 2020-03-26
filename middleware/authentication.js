
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    // Get token from Headers
    const token = req.header('x-auth-token'); 
    // if no token 401 Uathorized status
    if(!token) return res.status(401).send('Unauthorized action!')
    
    try {
        // verify JWT
        const verified = jwt.verify(token, process.env.jwtPrivateKey)
        // IF JWT, NEXT()
        next(); 
    }
    catch(ex){
        console.error(ex);
    }
}