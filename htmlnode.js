const express = require("express")
const path = require('path')

const app = express()

const publicPath = path.join(__dirname, 'public')
// console.log(publicPath); 

// app.use(express.static(publicPath))

app.set('view engine', 'ejs')

// put underscore to know that it is not in use.
app.get('/', (_, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/profile', (_, res) => {
    const user = {
        name: "Amit",
        email: "a@gmail.com",
        city: "bihar",
        skills: ['node', 'js', 'java']
    }
    res.render('profile', {user})
})

app.get('/login',(_, res) => {
    res.render('login')
})

app.get('/about', (_, res) => {
    res.sendFile(`${publicPath}/about.html`)
})

app.get('*', (_, res) => {
    res.sendFile(`${publicPath}/404page.html`)
})

app.listen(4000) 