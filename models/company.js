const mongoose = require('mongoose');

const company = new mongoose.Schema({
    name: {
        type: String
    },
    functions: {
        type: [String]
    },
    location: {
        latitude: {
            type: String,
            default: "52.332391"
        }, 
        longtitude: {
            type: String,
            default: "4.921986"
        }
    },
    image: {
        type: String,
        default: null
    }
});

module.exports = Company = mongoose.model('company', company);
