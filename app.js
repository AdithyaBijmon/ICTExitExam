const express = require('express')
const app = express();

const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors());

const authroutes=require('./routes/authRoutes')
app.use(express.json())
app.use('/auth',authroutes);
mongoose.connect('mongodb+srv://Adithya:Appuskunju5@cluster0.kkxodvi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/otp_verification');


app.listen(3000,function port(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("Port Connected...")
    }
})