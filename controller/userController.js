
const User = require('../model/User')

const { createTokenUser, attachCookiesToResponse } = require('../utils')



const register = async(req,res)=>{

const { email, name,password } = req.body;

const emailAlreadyExist = await User.findOne({email})

if(emailAlreadyExist){

res.send('Email already exist')

}

const isFirstAcount = (await User.countDocuments({})) === 0;

const role = isFirstAcount ? 'admin' : 'user';

const user = await User.create({name,email,password,role});

const tokenUser = createTokenUser(user);

attachCookiesToResponse({ res, user:tokenUser })

res.status(200).json({ user: tokenUser });

}




const logIn = async(req,res)=>{

const {email, password} = req.body;

if(!email || !password){

  return  res.send('Please provide email or password')
}

const user = await User.findOne({email})


if(!user){

return res.send('Invalid')

}

const passwordAlreadyExist = await user.comparePassword(password)

if(!passwordAlreadyExist){

    return res.send('no r nor nor nro not')

}


const tokenUser = createTokenUser(user);

attachCookiesToResponse({ res, user:tokenUser })

res.status(200).json({ user: tokenUser });


}

const logOut = async(req,res)=>{

res.send('logOut')

}


module.exports = {

register, logIn, logOut

}

