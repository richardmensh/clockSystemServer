const express = require('express');
const mongoose = require('mongoose');
const Event = require('../models/event');
const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const {companyId, clockIn, clockOut } = req.body;
        let event = new Event({
            companyId: companyId,
            clockIn: clockIn,
            clockOut: clockOut
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

module.exports = route;