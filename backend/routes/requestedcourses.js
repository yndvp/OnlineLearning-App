// Require express router
const router = require('express').Router();
// RequestedCourse mongoose model
let RequestedCourse = require('../models/requestedcourse.model');

// Get all documents request
router.route('/').get((req, res) => {
  RequestedCourse.find()
    .then((requestedcourses) => res.json(requestedcourses))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Create request
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  // Create new instance of requestedcourse
  const newRequestedCourse = new RequestedCourse({
    title,
    description,
  });

  // Save the requestedcourse in the database
  newRequestedCourse
    .save()
    .then(() => res.json('RequestedCourse added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Get one document request
router.route('/:id').get((req, res) => {
  RequestedCourse.findById(req.params.id)
    .then((requestedcourse) => res.json(requestedcourse))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Delete request
router.route('/:id').delete((req, res) => {
  RequestedCourse.findByIdAndDelete(req.params.id)
    .then((requestedcourse) => res.json('RequestedCourse deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Update request
router.route('/update/:id').post((req, res) => {
  RequestedCourse.findById(req.params.id)
    .then((requestedcourse) => {
      requestedcourse.title = req.body.title;
      requestedcourse.description = req.body.description;

      requestedcourse
        .save()
        .then(() => res.json('RequestedCourse updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
