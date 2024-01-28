const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/dependentData");
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 

const dependencyRoute = require('./routes/dependencyRoute');

app.use('/api',dependencyRoute);

app.listen(3002,function(){
    console.log("Server is running...");
})