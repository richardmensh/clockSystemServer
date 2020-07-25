const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db/connection');
const app = express();

app.use(express.json({ extended: false}));
connectDB();
app.use('/', require('./api/companyApi'));
const Port = process.env.Port || 8080;

app.listen(Port, () => {
    console.log('Express server listening on port', Port)
    console.log("app is running " + Port);
});