const request = require('request');

const fs = require('fs');

//const content = 'Some content!';

const dataStore = process.argv.slice(2);


request(dataStore[0], (error, response, body) => {

  fs.writeFile(dataStore[1], body, err => {
    if (!err) {
      console.log(`Downloaded and saved ${body.length} bytes to ${dataStore[1]}.`);
    } else {
      console.error(err);
    }
  });
})


