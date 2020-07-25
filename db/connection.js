const mongoose = require('mongoose');

const URi = "mongodb+srv://richard:richard123@clocksystem.cvsrn.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || URi, {
            useUnifiedTopology: true,
            useNewUrlParser: true
         });
        console.log("db connection");
    } catch (error) {
        console.log(error);
    }
   
}

module.exports = connectDB;