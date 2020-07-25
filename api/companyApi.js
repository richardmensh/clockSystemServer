const express = require('express');
const mongoose = require('mongoose');
const Company = require('../models/company');
const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const { name, functions, latitude, longtitude } = req.body;
        let company = new Company({
            name: name,
            functions: functions
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

module.exports = route;
