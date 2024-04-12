import http from 'http';
const url = "http://api.weatherapi.com/v1/current.json?key=6541c4af6b58476c81661208241103&q=48.8567,2.3508";

const request = http.request(url, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });
  response.on('end', () =>{
    console.log(data);
  })
})
request.on('error', (error) => {
  console.log("An error", error);
})
request.end()