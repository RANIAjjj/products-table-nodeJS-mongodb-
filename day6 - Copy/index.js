const mongoose = require('mongoose')
const express = require('express')
const policy = require('cors')
const app = express()
app.use(policy())
const port = 8080
const productRoute = require('./routes/productRoute')

mongoose.connect('mongodb://127.0.0.1:27017/day5-nodejs').then(()=>{
    console.log("sucssesfully connected");
}).catch(err=>{
    console.log(err);
})
app.use(express.urlencoded({ extended: true }));
app.use('/products' , productRoute)

app.listen(port , ()=> console.log(`Example app listening on port ${port}!`))
