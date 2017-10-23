var express = require('express');
var router = express.Router();
const db = require('../db/knex')
//API login
const okta = require('@okta/okta-sdk-nodejs');
const client = new okta.Client({
  orgUrl: 'dev-411294.oktapreview.com',
  token: '00sUprUO1DpiBRnYzz83s6wxlZyKdh8mYVO9-WGjkY'
});
const newUser = {
  profile: {
    firstName: 'Foo',
    lastName: 'Bar',
    email: 'foo@example.com',
    login: 'foo@example.com',
  },
  credentials: {
    password : {
      value: 'PasswordAbc123'
    }
  }
};

//Create User
// client.createUser(newUser)
// .then(user => {
//   console.log('Created user', user);
// });

//Read user

// client.getUser('foo@bar.com').then(user => {
//   console.log(user);
// });
module.exports = router;
