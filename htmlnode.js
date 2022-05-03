const express = require("express")
const path = require('path')

const app = express()

const publicPath = path.join(__dirname, 'public')
console.log(publicPath); 

// app.use(express.static(publicPath))

// put underscore to know that it is not in use.
app.get('/', (_, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (_, res) => {
    res.sendFile(`${publicPath}/about.html`)
})

app.get('*', (_, res) => {
    res.sendFile(`${publicPath}/404page.html`)
})

app.listen(4000) 