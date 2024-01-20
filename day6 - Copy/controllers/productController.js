const Product = require("../models/product")



const getAllItems = async()=>{
    try{
        let data = await Product.find()
        return data
    }catch(e){
        console.log(e);
    }
}

const addNew = async(_name,_price,_quantity)=>{
    try{
        let data = await Product.create({name:_name , price:_price ,quantity:_quantity })
        return data

    }catch(e){
        console.log(e);
    }
}

const deleteItem = async(_name)=>{
    try{
        let data = await Product.deleteOne({name:_name})
        return data
    }catch(e){
        console.log(e);
    }
}

const editItem = async(_id,_name,_price,_quantity)=>{
    try{
        let data = await Product.updateOne({id:_id} , {$set:{name:_name,price:_price,quantity:_quantity}})
        return data
    }catch(e){
        console.log(e);
    }
}

module.exports={getAllItems,addNew,deleteItem,editItem}