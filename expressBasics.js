const express = require('express')
const res = require('express/lib/response')
const app = express()

app.get('/',(req, res) => {
    console.log("data sent by browser", req.query.name);
    res.send("Home Page")
})

//from search http://localhost:5000/?name=%22amit%22
//from terminal data sent by browser "amit"

app.get('/about', (req, res) => {
    res.send("About Page")
})

app.get('/help', (req, res) => {
    res.send("Help Page")
})

app.listen(5000)