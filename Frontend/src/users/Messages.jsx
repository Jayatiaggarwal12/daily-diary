import React, { useState } from 'react';
import './Messages.css';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    // Send message (API call)
    setMessages([...messages, message]);
  };

  return (
    <div className="messages">
      <h1>Messages</h1>
      <textarea placeholder="Type a message"></textarea>
      <button onClick={() => handleSendMessage("Sample message")}>Send</button>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
