// 6541c4af6b58476c81661208241103

// const request = require("postman-request");
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// const url1 =
//   "http://api.weatherapi.com/v1/current.json?key=6541c4af6b58476c81661208241103&q=48.8567,2.3508";
// // request({url: url}, (_, response) =>{
// //   const data = JSON.parse(response.body);
// //   console.log(data.current);
// // })
// // Challenge: Print a small forecast to the user
// request({ url: url1, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       `It is currently ${response.body.current.temp_c} degrees out. It feels like ${response.body.current.feelslike_c} degrees out.`
//     );
//   }
// });
// access token = pk.eyJ1IjoidmlydGkiLCJhIjoiY2x0bXBnYzZzMHk2YjJrb2U5anM5bHVscCJ9.OMaXxZl-golT4RhayQyKKQ
// https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmlydGkiLCJhIjoiY2x0bXBnYzZzMHk2YjJrb2U5anM5bHVscCJ9.OMaXxZl-golT4RhayQyKKQ

// Geocoding
// Address -> Lat/Lang -> Weather

// Challenge: Print the lat/lang for Los Angeles
// Challenge: Handle errors for geocoding request
// const url2 =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmlydGkiLCJhIjoiY2x0bXBnYzZzMHk2YjJrb2U5anM5bHVscCJ9.OMaXxZl-golT4RhayQyKKQ";
// request({ url: url2, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location service");
//    } else if(response.body.features.length === 0){
//     console.log("Unable to find location. Try another search.");
//    }
//   else {
//     console.log(
//       `Latitude: ${response.body.features[0].center[1]}, Longitude: ${response.body.features[0].center[0]}`
//     );
//   }
// });


// geocode('Philadelphia New York', (error, data) => {
//   console.log('Error', error);
//   console.log('Data', data);
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// Challenge: Accept location via command line
// Challenge: Use both destructuring and property shorthand in weather app
const address = process.argv[2];
if(!address){
  console.log('Please provide an address');
} else {
  geocode(address, (error, {Latitude, Longitude, Location} = {}) => {
    if(error) {
      return console.log(error);
    }
    forecast(Latitude, Longitude, (error, forecastdata) => {
      if(error){
        return console.log('Error', error)
      }
      console.log(Location);
      console.log(forecastdata);
    })
  })
}



