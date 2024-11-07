// models/attendance.js
const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  attendance: [{ date: Date, present: Boolean }], // Store attendance records with date and present status
  class: String,
  subject: String,
  year: Number,
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
