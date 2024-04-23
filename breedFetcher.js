const request = require('request');

// const input = process.argv.slice(2);
// const breed = input.toString();

// request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (erroror, response, body) => {
//   if (erroror) {
//     console.log("Invalid URL...");
//   } else {
//     const data = JSON.parse(body);
//     console.log(typeof data);

//     if (!data[0]) {
//       console.log("Breed not found");
//     } else {
//       console.log(data[0].description);
//     }
//   }
// });

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    } else {
      const data = JSON.parse(body);
  
      if (!data[0]) {
        return callback(`Breed ${breedName} not found`, null);
      } else {
        return callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };