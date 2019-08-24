const User=require('../models/signup');
module.exports.signup=function(req,res){
   // return res.end('<h1>Express is up for codeial</h1>');
   return res.render('signup',{
       title:'sign up'
   });
}
module.exports.signin=function(req,res){
    return res.render('signin',{
        title:'signin'
    });
}
module.exports.score=function(req,res){
    return res.end('<h1>200 vs wi,140 vs aus,130 vs nz');
}
module.exports.create=function(req,res){
    //  return res.end('hii I am very good in cricket****');
     if(req.body.password!=req.body.confirm_password)
           return res.redirect('back');
    User.findOne({email: req.body.email},function(err,user){
          if(err){
              console.log("err",err);
          }
          if(!user){
              User.create(req.body, function(err,user){
                  if(err){console.log('error in signup',err)};
                  return res.redirect('/signin');
              });
            }
        
          else{
              return res.redirect('back');
          }
    });
}
  module.exports.createSession=function(req,res){
      //TODO later
     
}