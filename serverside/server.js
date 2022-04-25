const express = require('express')
const mongoose = require('mongoose')
const nodemon  = require('nodemon')
const dotenv = require('dotenv')
const postrouter = require('./routes/route')
const app = express()
dotenv.config()
url = process.env.DATABASE_ACCESS
mongoose.connect(url,{useNewUrlParser: true},(error)=>{
    if(error){
        console.log('There is error relating connect database',error)
    }else{
        console.log('the database have connected')
    }
})
const cors = require('cors')
app.use(cors())
app.use(express.json())
//app.use(express.urlencoded({ extended: false }))
const port = process.env.PORT
app.use('/api',postrouter)
app.use(express.static("uploads"))
app.listen(port,()=>{
    console.log('server is running at port',port)
})