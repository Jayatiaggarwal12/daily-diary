import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { startOfMonth, endOfMonth, eachDayOfInterval, format } from 'date-fns';
import './Dashboard.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Dashboard = ({ studentData = {} }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const progressData = {
    labels: ['Math', 'Physics', 'Chemistry', 'Biology'],
    datasets: [
      {
        label: 'Progress (%)',
        data: [80, 70, 85, 60], // Example data; replace with dynamic values if needed
        backgroundColor: '#1e88e5',
        borderColor: '#1565c0',
        borderWidth: 1,
      },
    ],
  };

  // Handle new task addition
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  // Generate current month calendar dates
  const currentMonth = eachDayOfInterval({
    start: startOfMonth(new Date()),
    end: endOfMonth(new Date())
  });

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>Progress</li>
          <li>Assignments</li>
          <li>Attendance</li>
          <li>Messages</li>
          <li>Resources</li>
        </ul>
      </aside>

      <main className="dashboard-content">
        <div className="card-container">
          <div className="dashboard-card">
            <h3>Enrolled Courses</h3>
            <p>{studentData?.enrolledCourses || 0} courses</p>
          </div>
          <div className="dashboard-card">
            <h3>Total Classes</h3>
            <p>{studentData?.totalClasses || 0} classes</p>
          </div>
          <div className="dashboard-card">
            <h3>Assignments</h3>
            <p>{studentData?.assignments || 0} assignments</p>
          </div>
        </div>

        <div className="progress-section">
          <h3>Progress Overview</h3>
          <Bar data={progressData} options={{ responsive: true }} />
        </div>
      </main>

      <aside className="right-sidebar">
        <h3>Task List</h3>
        <div className="task-input">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>

        <hr />

        <h3>Calendar</h3>
        <div className="calendar">
          {currentMonth.map((date) => (
            <div key={date} className="calendar-date">
              {format(date, "d")}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
















