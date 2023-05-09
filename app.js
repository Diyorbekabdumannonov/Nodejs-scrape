const express = require('express');
const app = express()
const { screaper } = require('./scraper')

app.route('/')
    .get((req, res) => {
        res.end('<h1>Hello world</h1>')
    })

screaper()

app.listen(3000)