const express = require('express')
const request = require('request');

var token = "461e4f06dd0540849e70ef248b15babd69e84d8f16f";
var targetUrl = "https://www.googletagmanager.com/gtag/js?id=G-PC9XNQ6RD3&l=dataLayer&cx=c"
var encodedUrl = encodeURIComponent(targetUrl);

const app = express()

var options = {
    'method': 'GET',
    'url': `https://api.scrape.do?token=${token}&url=${encodedUrl}`,
    'headers': {}
};

app.route('/').get((res, req) => {
    request(options, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log(response.body);
            req.end(response.body)
        }
    });
})


app.listen(3000)