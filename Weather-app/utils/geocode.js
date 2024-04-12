const request = require('postman-request')
const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
    address
  )}.json?access_token=pk.eyJ1IjoidmlydGkiLCJhIjoiY2x0bXBnYzZzMHk2YjJrb2U5anM5bHVscCJ9.OMaXxZl-golT4RhayQyKKQ&limit=1`;
  request({ url, json: true }, (error, {body}) => {
    const {features} = body;
    if (error) {
      callback("Unable to connect to location service", undefined);
    } else if (features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        Latitude: features[0].center[1],
        Longitude: features[0].center[0],
        Location: features[0].place_name,
      });
    }
  });
};
module.exports = geocode;