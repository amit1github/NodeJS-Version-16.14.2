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

app.listen(3000);