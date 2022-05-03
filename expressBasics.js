const express = require('express')
const res = require('express/lib/response')
const app = express()

app.get('/',(req, res) => {
    res.send("Home Page")
})

app.get('/about', (req, res) => {
    res.send("About Page")
})

app.get('/help', (req, res) => {
    res.send("Help Page")
})

app.listen(5000)