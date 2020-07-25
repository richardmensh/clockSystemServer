const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db/connection');
const app = express();

app.use(express.json({ extended: false}));
connectDB();
app.use('/api/company', require('./api/companyApi'));
const Port = process.env.Port || 3000;

app.listen(Port, () => {
    console.log("app is running " + Port);
});