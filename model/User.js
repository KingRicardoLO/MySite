const mongoose = require('mongoose');
const validator =require('validator');
const bcrypt = require('bcryptjs');

const userShcema =new mongoose.Schema({

name:{
    type:String,
required:['true','provide name']

},
email:{
    type:String,
required:['true','provide email'],
validate:{

validator:validator.isEmail,
message:'Please provide valid email'

}

},
password:{
    type:String,
required:['true','provide password'],
minlength:6,

},

role:{

    type:String,
    enum:['admin','user'],
    default:'user',
}


})

userShcema.pre('save',async function(){

    const salt = await bcrypt.genSalt(10);

 this.password = await bcrypt.hash(this.password,salt);

})

userShcema.methods.comparePassword = async function(truePassword){

    const isMatch = await bcrypt.compare(truePassword,this.password);

    return isMatch;

}

module.exports = mongoose.model('Users',userShcema);