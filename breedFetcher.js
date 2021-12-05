let breed = process.argv[2];
const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) =>  {
//Error
  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(body);
  //Since the site still has a blank array [] even when the breed doesn't exist we can use this
  //to determine when the breed doesn't exist since the array length will be 0.
  if (data.length <= 0) {
    console.log("The breed you requested was not found.");
    return;
  } else {
  //Gets the description of the breed for the user based on the input.
    console.log(data[0]["description"]);
  }
});