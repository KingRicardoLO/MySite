
const mongoose = require('mongoose');
const connectDb = (url)=>{
    return mongoose.connect(url)

    
 .then(() => {
    console.log("it works " + url);
}).catch((err) => {
   console.log(`this is a ${err}`);
});


}

module.exports = connectDb