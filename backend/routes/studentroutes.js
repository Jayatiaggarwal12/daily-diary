const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Student = require('../models/Student'); // Assuming Student model
const Course = require('../models/Course');   // Assuming Course model
const Assignment = require('../models/Assignment'); // Assuming Assignment model

const router = express.Router();

// Login Route (already existing)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Student.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to Fetch Student Dashboard Data
router.get('/dashboard/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const courses = await Course.find({ studentId: student._id });
    const assignments = await Assignment.find({ studentId: student._id });

    res.status(200).json({
      studentName: student.name,
      courses: courses,
      progress: student.progress,  // Assuming progress is stored in the student schema
      assignments: assignments,
      cart: student.cart // Assuming student has a cart in the schema
    });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).json({ message: 'Error fetching dashboard data', error });
  }
});

// Route to Add Course to Cart (POST request)
router.post('/add-to-cart', async (req, res) => {
  const { studentId, courseId } = req.body;
  
  try {
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    
    // Add course to the cart (if it isn't already added)
    if (!student.cart.includes(courseId)) {
      student.cart.push(courseId);
      await student.save();
    }
    
    res.status(200).json({ message: 'Course added to cart successfully', cart: student.cart });
  } catch (error) {
    console.error("Error adding course to cart:", error);
    res.status(500).json({ message: 'Error adding course to cart', error });
  }
});

// Route to Add a New Student (POST request)
router.post('/add', async (req, res) => {
  const { name, email, password } = req.body;

  // Check if the student already exists
  const existingStudent = await Student.findOne({ email });
  if (existingStudent) {
    return res.status(400).json({ message: 'Student already exists' });
  }

  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = new Student({ name, email, password: hashedPassword });
    await newStudent.save();
    
    res.status(201).json(newStudent);
  } catch (error) {
    console.error("Error adding new student:", error);
    res.status(500).json({ message: 'Error adding new student', error });
  }
});

// Logout Route (optional)
router.post('/logout', (req, res) => {
  // Invalidate JWT token logic (if applicable)
  res.json({ message: 'Logged out successfully' });
});

module.exports = router;

