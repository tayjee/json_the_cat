const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) =>  {
    //Error
    if (error) {
      console.error(error);
      return;
    }

    let data = JSON.parse(body);
    //Since the site still has a blank array [] even when the breed doesn't exist we can use this
    //to determine when the breed doesn't exist since the array length will be 0.
    if (data.length <= 0) {
      return callback('Breed does not exist', null);
    } else {
      //Gets the description of the breed for the user based on the input.
      return callback(error, data[0]["description"]);
    }
  });
};

module.exports = {fetchBreedDescription};