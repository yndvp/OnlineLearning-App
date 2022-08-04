const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Create express server
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
// Allow us to parse json
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established succesfully');
});

// Require the files
const categoriesRouter = require('./routes/categories');
const instructorsRouter = require('./routes/instructors');
const coursesRouter = require('./routes/courses');
const studentsRouter = require('./routes/students');
const requestedcoursesRouter = require('./routes/requestedcourses');

// Use the files
app.use('/categories', categoriesRouter);
app.use('/instructors', instructorsRouter);
app.use('/courses', coursesRouter);
app.use('/students', studentsRouter);
app.use('/requestedcourses', requestedcoursesRouter);

// Starts server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
