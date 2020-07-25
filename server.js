const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db/connection');
const app = express();

app.use(express.json({ extended: false}));
connectDB();

app.use('/companies', require('./api/companyApi'));
app.use('/events', require('./api/eventApi'));
const Port = process.env.PORT || 8080;

app.listen(Port, () => {
    console.log('Express server listening on port', Port);
});