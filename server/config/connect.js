const mongoose = require("mongoose");
const connect = require("./db").mongoURI;


const connectDB = async () => {
    try {
        await mongoose.connect(connect, {useCreateIndex:true, useNewUrlParser:true, useUnifiedTopology:true});
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}



module.exports = connectDB;