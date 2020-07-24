const mongoose = require('mongoose');
// location
const location = new mongoose.Schema({
    latitude: {
        type: String,
        default: "52.332391"
    }, 
    longtitude: {
        type: String,
        default: "4.921986"
    }
});

module.exports = Location = mongoose.model('location', location);