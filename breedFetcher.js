const request = require('request');

const input = process.argv.slice(2);
const breed = input.toString();

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log("Invalid URL...");
  } else {
    const data = JSON.parse(body);
    console.log(typeof data);

    if (!data[0]) {
      console.log("Breed not found");
    } else {
      console.log(data[0].description);
    }
  }
});