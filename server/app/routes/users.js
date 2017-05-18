const router = require('express').Router();
// const db = require('APP/db');
// const User = db.model('users');
// const {mustBeLoggedIn, forbidden} = require('./auth.filters');

var days = [{
  dateString: '5/14/2017',
  dayName: 'Su' ,
  logged: false,
},{
  dateString: '5/15/2017',
  dayName: 'Mo' ,
  logged: true,
},{
  dateString: '5/16/2017',
  dayName: 'Tu' ,
  logged: true,
},{
dateString: '5/17/2017',
  dayName: 'We' ,
  logged: false,
},{
dateString: '5/18/2017',
  dayName: 'Th' ,
  logged: false,
},{
dateString: '5/19/2017',
  dayName: 'Fr' ,
  logged: false,
},{
dateString: '5/20/2017',
  dayName: 'Sa' ,
  logged: false,
}];

router.get('/days', (req, res, next) => {
  console.log('response being sent: ', days);	
  res.json(days);
}
);

// router.get('/', forbidden('only admins can list users'), (req, res, next) => {
//   User.findAll()
//   .then(users => res.json(users))
//   .catch(next);
// });

// router.post('/signup', (req, res, next) => {
//   User.create(req.body)
//   .then(user => res.redirect('/api/auth/login'))
//   .catch(next);
// });

// router.param('userId', (req, res, next, id) => {
//   User.findById(id)
//   .then(user => {
//     if (!user) res.send(404);
//     else {
//       req.foundUser = user;
//       next();
//     }
//   })
//   .catch(next);
// });

// router.get('/:userId', (req, res, next) => {
//   res.send(req.foundUser);
// });

// router.put('/:userId', (req, res, next) => {
//   req.foundUser.update(req.body)
//   .then(user => res.send(user))
//   .catch(next);
// });

// router.delete('/:userId', (req, res, next) => {
//   req.foundUser.destroy()
//   .then(() => res.sendStatus(204))
//   .catch(next);
// });

// router.get('/:userId/days', (req, res, next) => {
//   req.foundUser.getDays()
//   .then(days => res.send(days))
//   .catch(next);
// });


module.exports = router;
