//const { EmployeeData } = require('../../employee-form/mongo');
const employeeData = require('../models/employeeDataModel');

const getEmployeeDatas = async(req,res)=>{
    try {
        const employeedatas = await employeeData.find({ });
        res.status(200).send({ success:true,msg:'Employees data',data:employeedatas});
    } catch (error) {
        res.status(400).send({ success:false,msg:error.message });
    }
}


module.exports = {
    getEmployeeDatas
}
