const productController =require('../controllers/productController')
const express = require('express')

const route = express.Router()

route.get('/' , (req,res)=>{
    res.send('hello in products route')
})

route.post('/add-item' , async(req,res)=>{
    let{name,price,quantity} = req.body
    let data = await productController.addNew(name,price,quantity)
    res.send("ok")
})

route.get("/get-all" , async(req,res)=>{
    try{
        let data = await productController.getAllItems()
        if(data!="error"){
            res.json({
                items:data,
                msg:"ok"
            })
        }else {
            res.status(403).send("not found")
        }
    }catch(e){
        res.status(500).send('server error')
    }
})


route.delete('/delete-item' , async(req,res)=>{
    try{
        let {name} = req.body
        let data = await productController.deleteItem(name)

    }catch(e){
        res.status(500).send('server error')
    }
})

route.patch('/edit-item/:id' , async(req,res)=>{
    try{
        let{name,price,quantity} = req.body
        let data = await productController.editItem(name,price,quantity)
        res.send("item edited successfully")
    }catch(e){
        res.status(500).send('server error')
    }
})

module.exports = route;