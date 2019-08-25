const express= require('express');
const cookieParser=require('cookie-parser');
const port=8000;
const app=express();
const expressLayouts = require('express-ejs-layouts');
const db=require('./config/mongoose');
// to use parser middlewares to take the form data
app.use(express.urlencoded());
app.use(expressLayouts);
app.use(cookieParser());

//extract and scripts from sub pages int the layout

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
// use express routers
app.use(express.static('./assets'));
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
    if(err){
        //interpolation
        console.log(`error in running the server : ${err}`);
    }
    console.log(`server is running on port : ${port}`);
});