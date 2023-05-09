const { default: mongoose } = require("mongoose");

const tourSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A tour must have a title']
    },
    duration: {
        type: String,
        required: [true, 'A tour must have a duration']
    },
    desc: {
        type: String,
        required: [true, 'A tour must have a desc']
    },
    image: {
        type: String,
        required: [true, 'A tour must have an image']
    },
    link: {
        type: String,
        required: [true, 'A tour must have a link']
    },
    price: {
        type: String,
        required: [true, 'A tour must have a price']
    },
    location: {
        type: String,
        required: [true, 'A tour must have a location']
    },
    id: {
        type: Number,
        required: [true, 'A tour must have an id']
    }
})

module.exports = tourSchema