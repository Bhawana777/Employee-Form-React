const express = require("express");
const dependency_route = express();

const bodyParser = require('body-parser');

dependency_route.use(bodyParser.json());
dependency_route.use(bodyParser.urlencoded({ extended:true }));

const dependencyController = require('../controllers/dependencyController');
dependency_route.get('/get-countries',dependencyController.getCountries);
dependency_route.get('/get-states',dependencyController.getStates);
dependency_route.get('/get-cities',dependencyController.getCities);

module.exports = dependency_route;