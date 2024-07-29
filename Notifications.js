import React, { useState } from 'react';

const Notification = () => {
  const [message, setMessage] = useState('No new notifications');

  // Simulate receiving notifications
  const receiveNotification = () => {
    // Replace with actual notification logic
    setMessage('New flight update available!');
  };

  return (
    <div>
      <h2>Notifications</h2>
      <p>{message}</p>
      <button onClick={receiveNotification}>Simulate Notification</button>
    </div>
  );
};

export default Notification;
