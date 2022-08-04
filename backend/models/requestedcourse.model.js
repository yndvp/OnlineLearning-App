const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestedcoursesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const RequestedCourse = mongoose.model(
  'RequestedCourse',
  requestedcoursesSchema
);

module.exports = RequestedCourse;
