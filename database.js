
require("dotenv").config();

const mongoose = require("mongoose");

const connectDatabase = ()=>{
    const dbURI = process.env.DB_URL; 
    mongoose
    .connect(dbURI)
    .then((data=>{
        console.log(`DB connected successfully:${data.connection.host}`);
    }))
    .catch((err)=>console.log("DB connection failed..",err.message))
};

module.exports = connectDatabase