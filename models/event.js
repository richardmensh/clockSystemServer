const mongoose = require('mongoose');
const moment = require('moment-timezone'); 

const event = new mongoose.Schema({
    companyId: {
        type: String
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
    },
    eventDate: {
        type: String
    },
    role: {
        type: String
    }

});

module.exports = Event = mongoose.model('event', event);