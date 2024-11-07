import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './Grading.css';

const Grading = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', grade: '' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', grade: '' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', grade: '' },
    // Initial students can be fetched from the backend if needed
  ]);

  const [newStudent, setNewStudent] = useState({ name: '', email: '', password: '' });
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);

  const handleGradeChange = (id, value) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, grade: value } : student
    ));
  };

  const handleSubmit = () => {
    const grades = students.map(student => ({
      id: student.id,
      grade: student.grade,
    }));
    console.log("Submitted Grades:", grades);
    alert('Grades submitted successfully!');
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.email || !newStudent.password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/students/add', newStudent);
      const addedStudent = response.data;

      // Update students state with the new student
      setStudents([...students, { id: addedStudent._id, name: addedStudent.name, email: addedStudent.email, grade: '' }]);
      setNewStudent({ name: '', email: '', password: '' });
      setShowAddStudentForm(false);
    } catch (error) {
      console.error("There was an error adding the student!", error);
      alert('Error adding student. Please try again.');
    }
  };

  return (
    <div className="grading-page">
      <h2>Grading Page</h2>
      <div className="search-filter">
        <input type="text" placeholder="Search..." />
        <select>
          <option value="">Filter by Course</option>
          <option value="course1">Course 1</option>
          <option value="course2">Course 2</option>
        </select>
      </div>
      
      {/* Button to toggle the add student form */}
      <button className="add-student-button" onClick={() => setShowAddStudentForm(!showAddStudentForm)}>
        {showAddStudentForm ? 'Cancel' : 'Add Student'}
      </button>

      {/* Add Student Form */}
      {showAddStudentForm && (
        <form onSubmit={handleAddStudent} className="add-student-form">
          <input
            type="text"
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={newStudent.password}
            onChange={(e) => setNewStudent({ ...newStudent, password: e.target.value })}
            required
          />
          <button type="submit" className="submit-student-button">Submit</button>
        </form>
      )}

      {/* Table for grading */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>
                <input 
                  type="text" 
                  value={student.grade} 
                  onChange={(e) => handleGradeChange(student.id, e.target.value)} 
                  placeholder="Enter grade" 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="submit-button" onClick={handleSubmit}>Submit Grades</button>
    </div>
  );
};

export default Grading;


