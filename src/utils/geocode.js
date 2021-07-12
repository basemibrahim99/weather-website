const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiYmFzZW1pYnJhaGltIiwiYSI6ImNrcXUxa2dxcjAwN2Myem1mdnBxc2liNm0ifQ.JeO8AlryLaXQnjqK8i8ojA&limit=1`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback(
        "Unable to find location. Try again with a different search.",
        undefined
      );
    } else {
      const location = body.features[0].place_name;
      const latitude = body.features[0].center[1];
      const longitude = body.features[0].center[0];
      callback(undefined, {
        latitude,
        longitude,
        location,
      });
    }
  });
};

module.exports = geocode;
