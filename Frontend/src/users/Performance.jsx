import React, { useState, useEffect } from 'react';
import './Performance.css';

const Performance = () => {
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    // Fetch performance data (API call)
    fetch('/api/teacher/performance')
      .then(res => res.json())
      .then(data => setPerformanceData(data));
  }, []);

  return (
    <div className="performance">
      <h1>Performance</h1>
      <ul>
        {performanceData.map(student => (
          <li key={student.id}>
            <h2>{student.name}</h2>
            <p>Progress: {student.progress}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Performance;
