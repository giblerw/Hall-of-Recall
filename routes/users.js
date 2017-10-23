var express = require('express');
var router = express.Router();
const db = require('../db/knex')
/* GET users listing. */

router.get('/', async (req, res, next) => {
  const users = await db('secrets')
  res.json(users)
});

module.exports = router;
