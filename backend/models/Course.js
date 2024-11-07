const mongoose = require('mongoose');

// Define the Course schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title is required
  },
  description: {
    type: String,
    required: true, // Description is required
  },
});

// Create a model based on the schema
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
