import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentAssignments.css';

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState("");
  const [description, setDescription] = useState(""); // State for description
  const [dueDate, setDueDate] = useState(""); // State for due date
  const [subject, setSubject] = useState(""); // State for subject
  const [file, setFile] = useState(null); // State for the uploaded file

  // Fetch assignments when the component mounts
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get('http://localhost:5003/api/assignments');
        setAssignments(response.data);
      } catch (error) {
        console.error('Error fetching assignments:', error);
        alert('Failed to fetch assignments.');
      }
    };

    fetchAssignments();
  }, []);

  // Handle assignment creation with file upload
  const handleCreateAssignment = async () => {
    if (newAssignment.trim() && file && dueDate && subject) {
      const formData = new FormData();
      formData.append('title', newAssignment);
      formData.append('description', description); // Append the description
      formData.append('dueDate', dueDate); // Append the due date
      formData.append('subject', subject); // Append the subject
      formData.append('file', file); // Append the file

      try {
        const response = await axios.post('http://localhost:5003/api/admin/assignments', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setAssignments([...assignments, response.data.assignment]);
        // Reset the form fields after submission
        setNewAssignment("");
        setDescription("");
        setDueDate("");
        setSubject("");
        setFile(null);
      } catch (error) {
        console.error('Error creating assignment:', error);
        alert('Failed to create assignment.');
      }
    } else {
      alert("Please fill in all the fields and select a file.");
    }
  };

  return (
    <div className="assignments">
      <h1>Assignments</h1>
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Assignment Title" 
          value={newAssignment} 
          onChange={(e) => setNewAssignment(e.target.value)} 
        />
        <textarea 
          placeholder="Assignment Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <input 
          type="date" 
          placeholder="Due Date" 
          value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Subject" 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)} 
        />
        <input 
          type="file" 
          onChange={(e) => setFile(e.target.files[0])} 
        />
        <button onClick={handleCreateAssignment}>Create Assignment</button>
      </div>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment._id} className={`assignment-card ${assignment.completed ? "completed" : ""}`}>
            <span className="assignment-title">{assignment.title}</span>
            <p className="assignment-description">{assignment.description}</p>
            <p className="assignment-dueDate"><strong>Due Date:</strong> {new Date(assignment.dueDate).toLocaleDateString()}</p>
            <p className="assignment-subject"><strong>Subject:</strong> {assignment.subject}</p>
            <button 
              className="toggle-btn" 
              onClick={() => toggleComplete(assignment._id)} // Implement toggleComplete as needed
            >
              {assignment.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentAssignments;
