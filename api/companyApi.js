const express = require('express');
const mongoose = require('mongoose');
const Company = require('../models/company');
const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const { name, functions, address, latitude, longtitude } = req.body;
        let company = new Company({
            name: name,
            functions: functions,
            latitude: latitude,
            longtitude: longtitude,
            address: address
        });
        await company.save();

        res.json(company);
    } catch (err) {
        res.json({ message: err});
        console.log(err);
    }
    
});

route.get('/', async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (err) {
        res.json({ message: err});
        console.log(err);
    }
});

// get by id
route.get('/:id', async (req, res) => {
    try {
        const company = await Company.findOne({ _id: req.params.id })
        res.json(company);
    } catch (err) {
        res.json({ message: err});
        console.log(err);
    }
});


module.exports = route;
