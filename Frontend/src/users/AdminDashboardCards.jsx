import React from 'react';
import './AdminDashboardCards.css'; // Assuming you'll reuse the CSS or customize it

const AdminDashboardCards = () => {
  const cardData = [
    {
      title: 'Total Students',
      value: 1200,
      change: 'increase',
      changeValue: '5%',
    },
    {
      title: 'Total Teachers',
      value: 80,
      change: 'stable',
      changeValue: '0%',
    },
    {
      title: 'Active Courses',
      value: 30,
      change: 'increase',
      changeValue: '10%',
    },
    {
      title: 'Completed Assignments',
      value: 250,
      change: 'increase',
      changeValue: '8%',
    },
    {
      title: 'Revenue',
      value: '$150,000',
      change: 'increase',
      changeValue: '12%',
    }
  ];

  return (
    <div className="dashboard-cards-container">
      {cardData.map((card, index) => (
        <div className="dashboard-card" key={index}>
          <div className="card-header">
            <h3>{card.title}</h3>
          </div>
          <div className="card-body">
            <p className="card-value">{card.value}</p>
            <p className={`card-change ${card.change}`}>
              {card.change === 'increase' ? '▲' : card.change === 'decrease' ? '▼' : '•'} {card.changeValue}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboardCards;
