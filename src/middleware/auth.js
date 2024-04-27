const jwt = require('jsonwebtoken');


const checkAuth = (req,res,next) =>{
    try{
        const token = req.headers.authorization.split(' ')[1];
       
        const decodedData = jwt.verify(token,JWT_SECRET);
       
        req.userData = {

            userid:decodedData.userid
        
        
        }
        
        next();

    }
    catch(err){
       
        res.status(401).json(
            {
                message:"Auth Error"
            }
        )
    }
}
module.exports = checkAuth