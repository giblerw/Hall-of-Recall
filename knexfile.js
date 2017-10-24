require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'hallOfRecall'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL

  }

};
