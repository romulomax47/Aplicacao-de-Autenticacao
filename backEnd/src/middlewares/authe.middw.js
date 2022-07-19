const dotenv = require('dotenv')
dotenv.config()

const jwt = require('jsonwebtoken')

 
module.exports = (req, res, next) =>{
    try {
        const token = req.header('authorization-token')
        console.log(token)
        let decoded = jwt.verify(token, process.env.SECRET )
        req.userData = decoded;
        next();
    } catch (error) {
        res.status(401).json({message:'falha na Autenticação!'})
    }
}
