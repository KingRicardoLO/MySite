const User = require('../model/User')


const getAllData = async(req,res)=>{

   const user = await User.find({})

   console.log(user);
    res.status(200).json({user})


}

const getAllEmail= async(req,res)=>{

   

    const user = await User.find({}).select('email')

    res.status(200).json({user})

}

module.exports = {

  getAllData, getAllEmail

}

