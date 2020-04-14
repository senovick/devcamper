const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'google',
  apiKey: 'AIzaSyCZmoBWeSOZp0mx-_6_QOpD00J9xvEPlRw',
  formatter: null,
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
