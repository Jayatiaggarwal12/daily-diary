// controllers/attendanceController.js
const Attendance = require('../models/attendance');

// Fetch all attendance records
exports.getAllAttendance = async (req, res) => {
  try {
    const records = await Attendance.find().populate('studentId');
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new attendance record
exports.createAttendance = async (req, res) => {
  const { studentId, attendance, class: className, subject, year } = req.body;

  const newAttendance = new Attendance({ studentId, attendance, class: className, subject, year });

  try {
    const savedRecord = await newAttendance.save();
    res.status(201).json(savedRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update attendance record
exports.updateAttendance = async (req, res) => {
  try {
    const updatedRecord = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an attendance record
exports.deleteAttendance = async (req, res) => {
  try {
    await Attendance.findByIdAndDelete(req.params.id);
    res.json({ message: 'Record deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
