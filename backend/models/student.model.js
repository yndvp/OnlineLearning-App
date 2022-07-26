const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema(
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

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
