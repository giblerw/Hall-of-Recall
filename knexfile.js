require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
// Connect our database here
    connection: 'postgres://localhost/secrets'
    web: node app.js
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
    web: node app.js
  }

};
