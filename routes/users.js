
const express = require('express');
const router = express.Router();
const db = require('../db/knex');


router.get('/', (req, res, next) => {
  const Users = await db('users');
  console.log(Users);
  res.json(Users);

});

module.exports = router;
