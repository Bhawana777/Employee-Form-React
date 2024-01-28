const { Country, State, City } = require('country-state-city');
const { MongoClient } = require('mongodb');

async function populateDatabase() {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017/');
        const db = client.db('dependentData');

        const countriesBulk = db.collection('countries').initializeOrderedBulkOp();
        const countries = Country.getAllCountries();
        countries.forEach(country => {
            countriesBulk.insert({ name: country.name, code: country.isoCode });
        });
        await countriesBulk.execute();
        console.log('Countries inserted');

        const statesBulk = db.collection('states').initializeOrderedBulkOp();
        const states = State.getAllStates();
        states.forEach(state => {
            statesBulk.insert({ name: state.name, code: state.countryCode });
        });
        await statesBulk.execute();
        console.log('States inserted');

        const citiesBulk = db.collection('cities').initializeOrderedBulkOp();
        const cities = City.getAllCities();
        cities.forEach(city => {
            citiesBulk.insert({ name: city.name, code: city.stateCode });
        });
        await citiesBulk.execute();
        console.log('Cities inserted');

        client.close(); // Close the database connection
    } catch (err) {
        console.error('Error:', err);
    }
}

populateDatabase();
