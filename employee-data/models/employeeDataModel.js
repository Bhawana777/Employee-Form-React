const mongoose = require("mongoose");

const employeeDataSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    joinDate: { type: Date, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    currency: { type: String, required: true }
});

module.exports = mongoose.model('EmployeeData',employeeDataSchema);