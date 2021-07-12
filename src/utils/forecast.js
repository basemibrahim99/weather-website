const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=0c0ac18e4fa72657a5b391441d25afc8&query=${latitude},${longitude}&units=m`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      currentTemp = body.current.temperature;
      feelsLike = body.current.feelslike;
      weatherDescription = body.current.weather_descriptions[0];
      callback(
        undefined,
        `${weatherDescription}. It is currently ${currentTemp} degrees out. It feels like ${feelsLike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
