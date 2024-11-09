const express = require('express')
const people = require('./routes/people')
const auth = require('./routes/auth' )
const app = express()
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extends : false}))
app.use(express.json())

app.use('/api/people', people )
app.use('/login', auth )


app.get('/',(req,res)=>{
    res.send("Home Page")
})
app.get('/about',(req,res)=>{
    //console.log(req.user);
    
    res.send("about Page")
})

app.listen(5000 , ()=>{console.log("Sever opened at port 5000");
})