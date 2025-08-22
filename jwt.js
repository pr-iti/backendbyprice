const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) =>{
    // Extract the jwt token from the request headers
    const token = req.headers.authorization.split('')[1];
    if(!token) return res.status(401).json({error:'Unauthorized'});
    try{
        // verify the jwt token
        const decoded = jwt.verify(token,process.env.jwt_SecretKey);

        // Attach user information to the request object 
        res.user = decoded;
        next();

    }catch(err){
        console.error(err);
        res.status(401).json({error:'Invalid token'});

    }
};

// function to generate JWT token

const generateToken = (userData)=>
{
    // Generate a new token using user data;
    return jwt.sign(userData,process.env.jwt_SecretKey,{expiresIn:30});
}

module.exports = {jwtAuthMiddleware,generateToken};