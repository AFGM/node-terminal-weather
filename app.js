const argv = require("./config");

const geocode = require("./geocode/geocode.js");
const weather = require("./weather/weather");

/**
 * Method to get latitude and longitude from address and pass it to weather api
 */
geocode.geocodeAddress(argv.address, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(result, undefined, 2));
    weather.getWeather(result.latitude, result.longitude, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(JSON.stringify(result));
        console.log(`It's currently ${result.temperature} fahrenheit.`);
      }
    });
  }
});
