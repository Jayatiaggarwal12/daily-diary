import React, { useState } from 'react';
import './Resources.css';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState("");

  const handleAddResource = () => {
    // Add new resource (API call here)
    setResources([...resources, newResource]);
    setNewResource("");
  };

  return (
    <div className="resources">
      <h1>Resources</h1>
      <input 
        type="text" 
        placeholder="New resource" 
        value={newResource} 
        onChange={(e) => setNewResource(e.target.value)} 
      />
      <button onClick={handleAddResource}>Add Resource</button>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>{resource}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
