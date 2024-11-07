const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5003;

// Middleware setup
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));
app.use(express.json());

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

// Serve files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
const uri = process.env.MONGO_URI;
if (!uri) {
  console.error("MongoDB URI is not defined in .env");
  process.exit(1);
}

mongoose.connect(uri, {})
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log("MongoDB connection error:", err));

// Define schemas and models
const studentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  course: String,
  grade: Number,
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const adminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'admin' },
});

const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  subject: { type: String, required: true },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
  createdAt: { type: Date, default: Date.now },
  filePath: { type: String }, // New field to store file path
});

// New attendance model
const attendanceSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  attendance: [{ date: Date, present: Boolean }],
  class: String,
  subject: String,
  year: { type: Number, required: true },
});

const Student = mongoose.model('Student', studentSchema);
const Course = mongoose.model('Course', courseSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Assignment = mongoose.model('Assignment', assignmentSchema);
const Attendance = mongoose.model('Attendance', attendanceSchema); // Add attendance model

// Admin Middleware for JWT verification
const adminAuthMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Not an admin.' });
    }
    req.admin = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

// Admin Login Route
app.post('/api/admin/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error during login' });
  }
});

// Admin Route: Create a Course
app.post('/api/admin/courses', adminAuthMiddleware, async (req, res) => {
  const { title, description } = req.body;

  try {
    const newCourse = new Course({ title, description });
    await newCourse.save();
    res.status(201).json({ message: 'Course created successfully', course: newCourse });
  } catch (error) {
    res.status(500).json({ message: 'Error creating course' });
  }
});

// Admin Route: Fetch All Students
app.get('/api/admin/students', adminAuthMiddleware, async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students' });
  }
});

// Assignment Routes
// Route for Teachers to Create Assignment with File Upload
app.post('/api/admin/assignments', adminAuthMiddleware, upload.single('file'), async (req, res) => {
  const { title, description, deadline, subject, teacherId } = req.body;

  // Simple validation
  if (!title || !description || !deadline || !subject || !teacherId) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newAssignment = new Assignment({
      title,
      description,
      deadline,
      subject,
      teacherId,
      filePath: req.file ? req.file.path : null, // Store file path if uploaded
    });
    await newAssignment.save();
    res.status(201).json({ message: 'Assignment created successfully', assignment: newAssignment });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: 'Error creating assignment', error });
  }
});

// Route for Students to View All Assignments
app.get('/api/assignments', async (req, res) => {
  try {
    const assignments = await Assignment.find().populate('teacherId', 'name');
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching assignments', error });
  }
});

// Teacher Route: Get All Courses
app.get('/api/teacher/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses' });
  }
});

// Teacher Route: Get All Students
app.get('/api/teacher/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students' });
  }
});

// Teacher Route: Update Student Grade
app.post('/api/teacher/students/:studentId/grade', async (req, res) => {
  const { studentId } = req.params;
  const { grade } = req.body;

  try {
    const student = await Student.findByIdAndUpdate(
      studentId,
      { grade },
      { new: true }
    );

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({ message: 'Grade updated successfully', student });
  } catch (error) {
    res.status(500).json({ message: 'Error updating grade' });
  }
});

// Fallback route for undefined API endpoints
app.use((req, res) => {
  res.status(404).json({ message: 'API route not found' });
});

// Attendance Routes
const attendanceRoutes = require('./routes/attendanceRoutes'); // Add this line
app.use('/api/attendance', attendanceRoutes); // Add this line

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
