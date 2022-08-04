// Require express router
const router = require('express').Router();
// Instructor mongoose model
let Instructor = require('../models/instructor.model');

// Get all documents request
router.route('/').get((req, res) => {
  Instructor.find()
    .then((instructors) => res.json(instructors))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Create request
router.route('/add').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const courses = req.body.courses;

  // Create new instance of instructor
  const newInstructor = new Instructor({
    firstName,
    lastName,
    email,
    courses,
  });

  // Save the instructor in the database
  newInstructor
    .save()
    .then(() => res.json('Instructor added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Get one document request
router.route('/:id').get((req, res) => {
  Instructor.findById(req.params.id)
    .then((instructor) => res.json(instructor))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Delete request
router.route('/:id').delete((req, res) => {
  Instructor.findByIdAndDelete(req.params.id)
    .then((instructor) => res.json('Instructor deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Update request
router.route('/update/:id').post((req, res) => {
  Instructor.findById(req.params.id)
    .then((instructor) => {
      instructor.firstName = req.body.firstName;
      instructor.lastName = req.body.lastName;
      instructor.email = req.body.email;
      instructor.courses = req.body.courses;

      instructor
        .save()
        .then(() => res.json('Instructor updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
