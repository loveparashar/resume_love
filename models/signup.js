const mongoose=require('mongoose');

const signSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
}, {
    timestamps:true
});
const Signup=mongoose.model('Signup',signSchema);
module.exports=Signup;