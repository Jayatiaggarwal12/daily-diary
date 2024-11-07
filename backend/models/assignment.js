const mongoose = require('mongoose');

// Define the Assignment schema
const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  subject: { type: String, required: true }, // Subject or course name
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }, // Reference to the teacher
  createdAt: { type: Date, default: Date.now },
  filePath: { type: String },
});

// Create the Assignment model
const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;

