const mongoose = require('mongoose');

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
        type: Date,
        default: Date.now
    }
});

module.exports = Event = mongoose.model('event', event);