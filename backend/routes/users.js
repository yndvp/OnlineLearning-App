// Require express router
const router = require('express').Router();
// User mongoose model
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  // Get all users from mongodb database
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  // Create new instance of user
  const newUser = new User({ username });

  // Save the user in the database
  newUser
    .save()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
