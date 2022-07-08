
require('express-async-errors');
require('dotenv').config();

const express = require('express');
const app = express();

const morgan = require('morgan')


const cookieParser = require('cookie-parser');


const connectDB = require('./DB/DB')




const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');


const userRouter = require('./route/userRoute')
const dataRouter = require('./route/dataRoute')



app.use(express.static('./public'))

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(morgan('tiny'));



app.get('/ricardo/come' , (req,res)=>{


    console.log(req.signedCookies);
   
})




app.use('/ricardo/home',userRouter)
app.use('/ricardo',dataRouter)



const port = process.env.PORT || 3000;


const start = async()=>{

    try {
        await connectDB(process.env.url)
        app.listen(port,()=>{

            console.log(`connected to port ${port}`);
        })
        
    } catch (error) {
        console.log(error);
    }
}

start()