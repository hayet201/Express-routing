const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

const date = new Date().getHours();

app.get('/',(req,res)=>{
    if((date >= 18)&&(date<=17))
    res.sendFile(__dirname+'/Public/home.html')
    else
    res.send('out-of-service.html')
})


app.listen(3000, (err)=>{
    if(err)
        console.log("server not running")
    
    else
        console.log("server is running")
    
})