const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: Number,
    quantity:Number
})

const Product = mongoose.model('Product' , productSchema)
module.exports= Product
