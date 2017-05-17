'use strict';

const db = require('../db');
const DataTypes = db.Sequelize;

module.exports = db.define('days', {

  date: {
    type: Sequelize.DATE // eslint-disable-line new-cap
  }

});
