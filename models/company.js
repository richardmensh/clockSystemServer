const mongoose = require('mongoose');

const company = new mongoose.Schema({
    name: {
        type: String
    },
    functions: {
        type: [String]
    },
    latitude: {
        type: String
    }, 
    longtitude: {
        type: String,
    },
    image: {
        type: String,
        default: null
    }
});

module.exports = Company = mongoose.model('company', company);
