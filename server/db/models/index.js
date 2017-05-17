'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('Song')
// to get access to the Song model.

const Day = require('./day');
const User = require('./user');

// Form the associations

User.hasMany(Day);
//User.hasMany(Day, {foreignKey: 'user_id'});

// exported just in case, but can also be fetched via db.model('Day') etc.

module.exports = {
  Day: Day,
  User: User
};
