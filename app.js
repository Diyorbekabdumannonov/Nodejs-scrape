const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const express = require('express');
const pretty = require("pretty");
const app = express()

const url = "https://www.advantour.com/uzbekistan/tours.htm";


app.route('/').get(async (res, req) => {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const listItems = $(".tour-short .col-sm-8")
    const tours = [];
    listItems.each((el) => {
        const tour = {
            name: ''
        };
        tour.name = $('p').text()
        tours.push(tour);
    });
    fs.writeFile("coutries.json", JSON.stringify(tours, null, 2), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Successfully written data to file");
    });
    req.end($)
})

app.listen(3000)