const Country = require('../models/countryModel');
const State = require('../models/stateModel');
const City = require('../models/cityModel');

const getCountries = async(req,res)=>{
    try {
        const countries = await Country.find({ });
        res.status(200).send({ success:true,msg:'Countries data',data:countries});
    } catch (error) {
        res.status(400).send({ success:false,msg:error.message });
    }
}

const getStates = async(req,res)=>{
    try {
        if (!req.query.code || req.query.code === "") {
            res.status(200).send({ success: false, msg: 'Country code not provided', data: [] });
            return;
        }
        const states = await State.find({ code:req.query.code});
        res.status(200).send({ success:true,msg:'States data',data:states});
    } catch (error) {
        res.status(400).send({ success:false,msg:error.message });
    }
}

const getCities = async(req,res)=>{
    try {
        const cities = await City.find({ });
        res.status(200).send({ success:true,msg:'Cities data',data:cities});
    } catch (error) {
        res.status(400).send({ success:false,msg:error.message });
    }
}

module.exports = {
    getCountries,
    getStates,
    getCities
}
