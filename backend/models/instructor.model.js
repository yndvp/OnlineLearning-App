const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const instructorSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    courses: {
      type: Array,
    },
  },
  {
    versionKey: false,
  }
);

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;
