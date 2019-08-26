const express= require('express');
const cookieParser=require('cookie-parser');
const port=8000;
const app=express();
const expressLayouts = require('express-ejs-layouts');
const db=require('./config/mongoose');
// used for session cookie
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const MongoStore=require('connect-mongo')(session);
// to use parser middlewares to take the form data
app.use(express.urlencoded());
app.use(expressLayouts);
app.use(cookieParser());

//extract and scripts from sub pages int the layout

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
// use express routers
app.use(express.static('./assets'));

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views'); 
//mongo store is used to store the session cookie in the db
app.use(session({
    name:'codeial',
    //todo change the secret before deployment in production mode
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store:new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: 'disabled'
        },
        function(err){
            console.log(err || 'connect-mongodb setup ok');
        }
    )

}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
// use express router
app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        //interpolation
        console.log(`error in running the server : ${err}`);
    }
    console.log(`server is running on port : ${port}`);
});