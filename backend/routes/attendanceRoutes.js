const express = require('express');
const Attendance = require('../models/attendance');
const router = express.Router();
const { adminAuthMiddleware } = require('../middleware/auth'); // If you want to restrict access

// Create attendance record
router.post('/', adminAuthMiddleware, async (req, res) => {
  const { studentId, date, isPresent } = req.body;

  try {
    const attendance = new Attendance({ studentId, date, isPresent });
    await attendance.save();
    res.status(201).json({ message: 'Attendance recorded successfully', attendance });
  } catch (error) {
    res.status(500).json({ message: 'Error recording attendance', error });
  }
});

// Get attendance for a specific month and year
router.get('/:year/:month', async (req, res) => {
  const { year, month } = req.params;

  try {
    const startDate = new Date(year, month - 1, 1); // Month is 0-indexed in JS
    const endDate = new Date(year, month, 0); // Last day of the month

    const attendanceRecords = await Attendance.find({
      date: { $gte: startDate, $lte: endDate },
    }).populate('studentId', 'name');

    res.status(200).json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching attendance records', error });
  }
});

// Optionally: Update attendance record
router.put('/:id', adminAuthMiddleware, async (req, res) => {
  const { id } = req.params;
  const { isPresent } = req.body;

  try {
    const updatedAttendance = await Attendance.findByIdAndUpdate(
      id,
      { isPresent },
      { new: true }
    );

    if (!updatedAttendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    res.status(200).json({ message: 'Attendance updated successfully', updatedAttendance });
  } catch (error) {
    res.status(500).json({ message: 'Error updating attendance', error });
  }
});

// Export routes
module.exports = router;

