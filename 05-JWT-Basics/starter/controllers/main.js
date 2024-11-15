
require('dotenv').config()
const customApiError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')
const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new customApiError('Please provide email and password' ,400);
    }
    const id = new Date().getDate();
    const token = jwt.sign({id , username} , process.env.JWT_secret, {expiresIn : '30d'})
    console.log(username, password);
    res.status(200).json({msg : 'user created' , token})
}

const dashboard = async (req, res) => {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new customApiError('No token provided' , 401)
    }

    const token = authHeader.split(' ')[1]
   // console.log(token);
   // console.log(req.headers);
   try {
    const decoded = jwt.verify(token , process.env.JWT_secret)
    console.log(decoded);
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg : `Hello , ${decoded.username} ` , secret : `Here is your authorized data , your lucky number is ${luckyNumber}`})
   } catch (error) {
    throw new customApiError('Not authorized to access this route' , 401)
   }

   
    
}

module.exports = {
    login,
    dashboard}