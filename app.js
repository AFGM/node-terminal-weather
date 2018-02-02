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
    console.log(`Address: ${result.address}\n--------------------------`);
    weather.getWeather(result.latitude, result.longitude, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(
          `Temperature: ${result.temperature} °C\nApparent Temperature: ${
            result.apparentTemperature
          } °C\nPressure: ${result.pressure} Pa\nPrecipitation Probability: ${
            result.precipProbability*100
          } %\n`
        );
      }
    });
  }
});
