const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var path = require('path');
var bodyParser = require('body-parser');
var knex = require('knex');
var pg = require('pg');

var index = require('./routes/index');
var users = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(port, () => {
  console.log(`Api listening on port 3000`);
})

module.exports = app;
