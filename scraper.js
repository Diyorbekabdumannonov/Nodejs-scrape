const axios = require("axios");
const cheerio = require("cheerio");
const { default: mongoose } = require("mongoose");
const tourSchema = require('./schema')
const dotenv = require('dotenv')
dotenv.config('./.env')

mongoose.connect(process.env.MONGODBURL, {
    useNewUrlParser: true,
})
    .then(con => console.log('MongoDB connected!!!'))

const Tour = mongoose.model('Tour', tourSchema)

const screaper = async () => {
    const { data } = await axios.get(process.env.WEBSITEURL);
    const $ = cheerio.load(data);
    const listItems = $(".tour-short > div")
    listItems.each((id, el) => {
        const tour = new Tour({
            id: id,
            title: '',
            duration: '',
            desc: '',
            image: '',
            link: '',
            price: '',
            location: ''
        })
        tour.link = $(el).find('.btn-success').attr('href')
        tour.duration = $(el).find('p b').first().text()
        tour.desc = $(el).find('.col-sm-8 p:nth-child(2)').text()
        tour.image = $(el).find('img').attr('src')
        tour.price = $(el).find('p b').last().text()
        tour.location = $(el).find('p:nth-child(3)').text()
        tour.title = $(el).find('p a').first().text()
        tour.save().then(doc => {
            console.log('Successfylly added')
        }).catch(err => {
            console.log(err)
        })
    });
}

module.exports = {
    screaper
}