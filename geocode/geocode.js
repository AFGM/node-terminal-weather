const request = require("request");

module.exports.geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);
  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    },
    (error, response, body) => {
      if (error || body.status === "OVER_QUERY_LIMIT" || body.results.length === 0) {
        callback("Unable to connect to google servers... Try again!");
      } else if (body.status === "ZERO_RESULTS") {
        callback("Unable to find that address.");
      } else {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    }
  );
};
