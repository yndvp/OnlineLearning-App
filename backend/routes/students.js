// Require express router
const router = require('express').Router();
// Student mongoose model
let Student = require('../models/student.model');

// Get all documents request
router.route('/').get((req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Create request
router.route('/add').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const courses = req.body.courses;

  // Create new instance of student
  const newStudent = new Student({
    firstName,
    lastName,
    email,
    courses,
  });

  // Save the student in the database
  newStudent
    .save()
    .then(() => res.json('Student added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Get one document request
router.route('/:id').get((req, res) => {
  Student.findById(req.params.id)
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Delete request
router.route('/:id').delete((req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then((student) => res.json('Student deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Update request
router.route('/update/:id').post((req, res) => {
  Student.findById(req.params.id)
    .then((student) => {
      student.firstName = req.body.firstName;
      student.lastName = req.body.lastName;
      student.email = req.body.email;
      student.courses = req.body.courses;

      student
        .save()
        .then(() => res.json('Student updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Update one field
router.route('./');

module.exports = router;
