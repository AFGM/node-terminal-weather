const request = require("request");

const apikey = "212d4143e34ad12968a26aaad17ddf89";

module.exports.getWeather = (latitude, longitude, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/${apikey}/${latitude},${longitude}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature
        });
      } else {
        callback("Unable to fetch weather.");
      }
    }
  );
};
