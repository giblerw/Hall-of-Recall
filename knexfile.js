require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
// Connect our database here
    connection: 'postgres://localhost/hallOfRecall'

  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL

  }

};
