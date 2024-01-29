const Country = require('../models/countryModel');
const State = require('../models/stateModel');
const City = require('../models/cityModel');

const getCountries = async(req,res)=>{
    try {
        const countries = await Country.find({ });
        let vnCountriesWithCurrency = countries.filter(country => country.code && country.currency);
        
        if (vnCountriesWithCurrency.length > 0) {
            console.log("Countries with currency:", vnCountriesWithCurrency);
        }
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

const getCurrencyByCountryCode = async (req, res) => {
    try {
        if (!req.query.code || req.query.code === "") {
            res.status(400).send({ success: false, msg: 'Country code not provided', data: null });
            return;
        }

        const countries = await Country.find({ code: req.query.code, currency: { $exists: true } });

        console.log("code:", req.query.code);
        console.log("country", countries);

        if (countries.length > 0) {
            res.status(200).send({ success: true, msg: 'Currency data', data: countries[0].currency });
        } else {
            res.status(404).send({ success: false, msg: 'Country not found or currency information not available', data: null });
        }
    } catch (error) {
        res.status(500).send({ success: false, msg: error.message, data: null });
    }
}

module.exports = {
    getCountries,
    getStates,
    getCities,
    getCurrencyByCountryCode
}
