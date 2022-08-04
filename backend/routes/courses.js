// Require express router
const router = require('express').Router();
// Course mongoose model
let Course = require('../models/course.model');

// Get all documents request
router.route('/').get((req, res) => {
  Course.find()
    .then((courses) => res.json(courses))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Create request
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const instructor = req.body.instructor;
  const category = req.body.category;
  const level = req.body.level;
  const price = req.body.price;

  // Create new instance of course
  const newCourse = new Course({
    title,
    instructor,
    category,
    level,
    price,
  });

  // Save the course in the database
  newCourse
    .save()
    .then(() => res.json('Course added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Get one document request
router.route('/:id').get((req, res) => {
  Course.findById(req.params.id)
    .then((course) => res.json(course))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Delete request
router.route('/:id').delete((req, res) => {
  Course.findByIdAndDelete(req.params.id)
    .then((course) => res.json('Course deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Update request
router.route('/update/:id').post((req, res) => {
  Course.findById(req.params.id)
    .then((course) => {
      course.title = req.body.title;
      course.instructor = req.body.instructor;
      course.category = req.body.category;
      course.level = req.body.level;
      course.price = req.body.price;

      course
        .save()
        .then(() => res.json('Course updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
