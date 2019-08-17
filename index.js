const express= require('express');
const port=8000;
const app=express();

app.listen(port,function(err){
    if(err){
        
        //interpolation
        console.log(`error in running the server : ${err}`);
    }
    console.log(`server is running on port : ${port}`);
})