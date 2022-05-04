const express = require("express");
const dbConnect = require("./mongoDB01");
const app = express();

app.use(express.json()) // to get data from postman

app.get("/", async (req, res) => {
  let data = await dbConnect()
  data = await data.find().toArray()
  // console.log(data); 
  res.send(data);
});

app.post('/', async (req, res) => {
  let data = await dbConnect()
  let result = await data.insert(req.body)
  res.send(result)
})

app.put("/:name", async(req, res)=>{
  // console.log(req.body);
  let data = await dbConnect()
  let result = data.updateOne(
    // {name: "Iphone 13"},
    // {$set: {price: 500}}
    {name: req.params.name},
    {$set: req.body}
  )
  res.send({result: "update"})
})

app.listen(3000);