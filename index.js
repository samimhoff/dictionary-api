const axios = require('axios');
const config = require('./config.js');

function createDictionary() {
  const options = {
    method: 'post',
    url: 'https://dictionary.iachieved.it/dictionary',
    headers: {
      'Content-Type': 'application/json',
      Authorization: config.API_KEY
    }
  };
  axios(options).then((response) => {
    console.log('createDictionary');
    console.log('status: ', response.status);
    console.log('data: ', response.data);
    console.log('headers', response.headers);
  }).catch((err) => {
    console.log(err);
  })
};

function deleteDictionary(id) {
  const options = {
    method: 'delete',
    url: `https://dictionary.iachieved.it/dictionary/${id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: config.API_KEY
    }
  };
  axios(options).then((response) => {
    console.log('deleteDictionary');
    console.log('status: ', response.status);
    console.log('data: ', response.data);
    console.log('headers', response.headers);
  }).catch((err) => {
    console.log(err);
  });
}


// function createOrModifyEntry(id, key, word, definition) {
//   const options = {
//     method: 'post',
//     url: `https://dictionary.iachieved.it/dictionary/${id}/keys/${key}`,
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: config.API_KEY
//     },
//     body: {
//       "word": "definition"
//     }
//   };
//   axios(options).then((response) => {
//     console.log('createOrModify');
//     console.log('status: ', response.status);
//     console.log('data: ', response.data);
//     console.log('headers', response.headers);
//   }).catch((err) => {
//     console.log(err);
//   });
// }

var request = require('request');
function createOrModifyEntry (id, key, word) {
  request({
    method: 'POST',
    url: `https://dictionary.iachieved.it/dictionary/${id}/keys/${key}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: config.API_KEY
    },
    body: `{  \"value\": \"${word}\"}`
  }, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
  });
}

function getAllKeys(id) {
  const options = {
    method: 'GET',
    url: `https://dictionary.iachieved.it/dictionary/${id}/keys`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: config.API_KEY
    }
  };
  axios(options).then((response) => {
    console.log('getAllKeys');
    console.log('status: ', response.status);
    console.log('data: ', response.data);
    console.log('headers', response.headers);
  }).catch((err) => {
    console.log(err);
  });
}

function getValue(id, key) {
  const options = {
    method: 'GET',
    url: `https://dictionary.iachieved.it/dictionary/${id}/keys/${key}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: config.API_KEY
    }
  };
  axios(options).then((response) => {
    console.log('getAllKeys');
    console.log('status: ', response.status);
    console.log('data: ', response.data);
    console.log('headers', response.headers);
  }).catch((err) => {
    console.log(err);
  });
}


// console.log(createDictionary());
// console.log(createOrModifyEntry('8240c74a-2d96-4250-815d-35b9ad53ade4', 20, 'cat'));
// console.log(getAllKeys('8240c74a-2d96-4250-815d-35b9ad53ade4'));
// console.log(getValue('8240c74a-2d96-4250-815d-35b9ad53ade4', '20'));


// module.exports.createDictionary = createDictionary;