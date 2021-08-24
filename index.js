const axios = require('axios');

(function createDictionary() {
  const options = {
    method: 'post',
    url: 'https://dictionary.iachieved.it/dictionary',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  axios(options).then((response) => {
    console.log(response);

  }).catch((err) => {
    console.log(err);
  })
})();