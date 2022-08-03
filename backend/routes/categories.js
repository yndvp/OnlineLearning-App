// Require express router
const router = require('express').Router();
// Category mongoose model
let Category = require('../models/category.model');

// Get all documents request
router.route('/').get((req, res) => {
  Category.find()
    .then((categories) => res.json(categories))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Create request
router.route('/add').post((req, res) => {
  const category = req.body.category;
  const description = req.body.description;

  // Create new instance of category
  const newCategory = new Category({
    category,
    description,
  });

  // Save the category in the database
  newCategory
    .save()
    .then(() => res.json('Category added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Get one document request
router.route('/:id').get((req, res) => {
  Category.findById(req.params.id)
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Delete request
router.route('/:id').delete((req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then((category) => res.json('Category deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Update request
router.route('/update/:id').post((req, res) => {
  Category.findById(req.params.id)
    .then((category) => {
      category.category = req.body.category;
      category.description = req.body.description;

      category
        .save()
        .then(() => res.json('Category updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
