'use strict';

//const db = require('APP/db');
const api = module.exports = require('express').Router();

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./routes/auth'))
  .use('/users', require('./routes/users'))

// Send along any errors1
api.use((err, req, res, next) => {
    console.error(err);
  res.status(err.status || 500).send(err.message || err);
});

// No routes matched? 404.
api.use((req, res) => res.status(404).end());
