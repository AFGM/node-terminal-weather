const request = require("request");
const argv = require("./config");

var encodedAddress = encodeURIComponent(argv.address);

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  },
  (error, response, body) => {
    if (error || body.status === "OVER_QUERY_LIMIT" || body.results === 0) {
      console.log("Unable to connect to google servers... Try again!");
    } else if (body.status === "ZERO_RESULTS") {
      console.log("Unable to find that address.");
    } else {
      console.log(`Address: ${body.results[0].formatted_address}`);
      console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
      console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
  }
);
