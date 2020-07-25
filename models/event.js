const mongoose = require('mongoose');

const event = new mongoose.Schema({
    companyId: {
        type: Number
    },
    clockIn: {
        type: String
    }, 
    clockOut: {
        type: String
    },   
    scale: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ""
    }
});

module.exports = Event = mongoose.model('event', event);