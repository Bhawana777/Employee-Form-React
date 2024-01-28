const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 

mongoose.connect("mongodb://localhost:27017/employee-login");

const dependencyRoute = require('./routes/dependencyRoute');

app.use('/api',dependencyRoute);

app.listen(3000,function(){
    console.log("Server is running...");
})