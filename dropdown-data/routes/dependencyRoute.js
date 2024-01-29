const express = require("express");
const dependency_route = express();

const bodyParser = require('body-parser');

dependency_route.use(bodyParser.json());
dependency_route.use(bodyParser.urlencoded({ extended:true }));

const dependencyController = require('../controllers/dependencyController');
dependency_route.get('/get-countries',dependencyController.getCountries);
dependency_route.get('/get-states',dependencyController.getStates);
dependency_route.get('/get-cities',dependencyController.getCities);
dependency_route.get('/get-currency', dependencyController.getCurrencyByCountryCode);

module.exports = dependency_route;