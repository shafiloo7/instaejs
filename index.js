const express = require('express')
const app = express()

app.get('/', function(req, res) {
    console.log("app start")
    res.send('Hello Worl..d')
})

app.listen(3090)