const express = require('express');
const mongoose = require('mongoose');
const Event = require('../models/event');
const route = express.Router();
const moment = require('moment-timezone'); 
route.post('/', async (req, res) => {
    try {
        const {companyId, clockIn, clockOut, description, scale, eventDate, role } = req.body;
        let event = new Event({
            companyId: companyId,
            clockIn: clockIn,
            clockOut: clockOut,
            description: description,
            scale: scale,
            eventDate: eventDate,
            role: role
        });
        await event.save();
        res.json(event);
    } catch (err) {
        res.json({ message: err});
        console.log(err);
    }
});

route.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.json({ message: err});
        console.log(err);
    }
});

// get by id
route.get('/:id', async (req, res) => {
    try {
        const event = await Event.findOne({ _id: req.params.id })
        res.json(event);
    } catch (err) {
        res.json({ message: err});
        console.log(err);
    }
});

module.exports = route;