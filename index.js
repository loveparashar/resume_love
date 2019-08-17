const express= require('express');
const port=8000;
const app=express();
// use express routers
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
    if(err){
        
        //interpolation
        console.log(`error in running the server : ${err}`);
    }
    console.log(`server is running on port : ${port}`);
})