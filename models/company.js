const mongoose = require('mongoose');

const company = new mongoose.Schema({
    name: {
        type: String
    },
    functions: {
        type: [String]
    },
    address: { 
        type: String
    },
    image: {
        type: String,
        default: null
    }
});

module.exports = Company = mongoose.model('company', company);
