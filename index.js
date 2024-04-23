const { fetchBreedDescription } = require('./breedFetcher');

const input = process.argv.slice(2);
const breedName = input.toString();

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});