const { query } = require('express')
const express = require('express')
const res = require('express/lib/response')
const app = express()

app.get('/',(req, res) => {
    // console.log("data sent by browser", req.query.name);
    res.send(`<h1>Home Page</h1><a href="/about">Go to about</a>`)
})

//from search http://localhost:5000/?name=%22amit%22
//from terminal data sent by browser "amit"

app.get('/about', (req, res) => {
    res.send(`
        <input type="text" placeholder="username" value="${req.query.name}" />
        <button>Submit</button>
        <a href="/">Go to home</a>
    `)
})

app.get('/help', (req, res) => {
    res.send([
        {
            name: "amit",
            email: "amit@test.com"
        },
        {
            name: "tom",
            email: "tom@test.com"   
        }
    ])
})

app.listen(5000)