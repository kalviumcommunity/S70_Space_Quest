const express = require('express')
const app = express()
const connectDatabase = require('./database'); 
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;


// Connect to the database
connectDatabase();

app.get('/',(req, res) => {
    const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
    res.send({ message: "Welcome to ASAP Project", database: dbStatus } )  
})

app.get('/ping',(req,res)=>{
    res.send('Pong!')
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})