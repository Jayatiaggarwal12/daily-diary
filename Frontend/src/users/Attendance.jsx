import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './Attendance.css';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [year, setYear] = useState(2023);
  const [selectedMonth, setSelectedMonth] = useState(0); // 0 for January, 11 for December
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    // Fetch attendance data from the backend
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get('http://localhost:5003/api/attendance');
        setAttendanceData(response.data);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };

    fetchAttendanceData();
  }, []);

  useEffect(() => {
    // Calculate monthly attendance percentage for the selected year
    const calculateMonthlyAttendance = () => {
      const monthlyAttendance = Array(12).fill(0);
      const totalStudents = attendanceData.length;

      attendanceData.forEach(student => {
        student.attendance.forEach(record => {
          const monthIndex = new Date(record.date).getMonth(); // Get month index from date
          if (record.present) {
            monthlyAttendance[monthIndex] += 1; // Count only if present
          }
        });
      });

      // Calculate percentage
      const monthlyPercentage = monthlyAttendance.map(count => (totalStudents ? (count / totalStudents) * 100 : 0));
      setMonthlyData(monthlyPercentage);
    };

    calculateMonthlyAttendance();
  }, [attendanceData, year]);

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(Number(e.target.value));
  };

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Attendance Percentage',
        data: monthlyData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const handleUpdate = async () => {
    // Logic to update attendance (placeholder)
    alert('Attendance updated!');
    // Here you would typically send a PUT request to update attendance data
  };

  return (
    <div className="attendance">
      <h2>Attendance Entry</h2>
      <div className="class-selection">
        <label>Select Year:</label>
        <select onChange={handleYearChange} value={year}>
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
        </select>
      </div>
      <div className="month-selection">
        <label>Select Month:</label>
        <select onChange={handleMonthChange} value={selectedMonth}>
          {Array.from({ length: 12 }, (_, index) => (
            <option key={index} value={index}>
              {new Date(0, index).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
      </div>
      <div className="input-fields">
        <input type="text" placeholder="Student Name" />
        <input type="text" placeholder="Class" />
        <input type="text" placeholder="Subject" />
        <input type="date" placeholder="Date" />
        <select>
          <option>Section</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <select>
          <option>Academic Year</option>
          <option>2023-2024</option>
          <option>2024-2025</option>
        </select>
      </div>
      <button className="update-button" onClick={handleUpdate}>UPDATE</button>
      <div className="attendance-table">
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              {Array.from({ length: 31 }, (_, i) => <th key={i}>{i + 1}</th>)}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((student, index) => (
              <tr key={index}>
                <td>{student.studentId.name}</td>
                {student.attendance.map((record, i) => (
                  <td key={i} className={record.present ? 'present' : 'absent'}>
                    {record.present ? '✔️' : '❌'}
                  </td>
                ))}
                <td>
                  <button className="edit-button">✏️</button>
                  <button className="delete-button">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="chart-container">
        <h3>Monthly Attendance Percentage for {year} - {new Date(0, selectedMonth).toLocaleString('default', { month: 'long' })}</h3>
        <Bar data={data} />
      </div>
    </div>
  );
};

export default Attendance;







