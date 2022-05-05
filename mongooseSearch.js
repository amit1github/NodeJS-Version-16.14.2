const express = require('express')
require("./mongooseConfig") //connnection between nodejs and mongodb through mongoose
const Product = require('./mongooseProduct') // Schema/vaidate fields for products
const app = express()

app.use(express.json())

app.get('/search/:key', async (req, res)=>{
    console.log(req.params.key);
    let data = await Product.find(
        {
            "$or": [
                {"name": {$regex:req.params.key}},
                {"brand": {$regex:req.params.key}},
                {"category": {$regex:req.params.key}},
            ]
        }
    )
    res.send(data)
})

app.listen(5000)