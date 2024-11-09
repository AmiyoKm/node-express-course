const authorize = (req,res,next)=>{
    const {user} = req.query

    if(user === 'amiyo'){
        console.log("Authorized");
        req.user = {name : 'amiyo' , id : 5}
        next()
    }
    else{
        res.send("User not authorized")
    }
  
    
}
module.exports = authorize