const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
       useUnifiedTopology: true,
       useNewUrlParser: true
    });
   console.log("db connection on heroku");
}

module.exports = connectDB;