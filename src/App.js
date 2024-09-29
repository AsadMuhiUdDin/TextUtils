import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'; // Set body background to grey
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Set body background to white
    }
  };

  useEffect(() => {
    // Set initial body background color
    document.body.style.backgroundColor = mode === 'dark' ? 'grey' : 'white';
  }, [mode]);

  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        <TextForm heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
