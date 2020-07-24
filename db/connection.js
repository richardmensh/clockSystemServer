const mongoose = require('mongoose');

const URi = "mongodb+srv://richard:richard123@clocksystem.cvsrn.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URi, {
       useUnifiedTopology: true,
       useNewUrlParser: true
    });
   console.log("db connection");
}

module.exports = connectDB;