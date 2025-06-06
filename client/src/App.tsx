import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [msg, setMsg] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:3001/api/message')
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch((err) => {
        console.error('Failed to fetch message:', err);
        setMsg('Error fetching message');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Frontend</h1>
        <p>Message from backend:</p>
        <code>{msg}</code>
      </header>
    </div>
  );
}

export default App;