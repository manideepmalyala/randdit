import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';

function App() {
  const [mode, setMode] = useState(false);
  const [memes, setMemes] = useState([]);
  const [meme, setMeme] = useState({
    clicked: false
  });
  const styles = {
    backgroundColor: mode ? "#fff" : "#000",
    color: mode ? "#000" : "#fff",
    transition: "all 0.5s ease"
  }

  useEffect(() => {
    fetch("https://meme-api.com/gimme")
      .then(res => res.json())
      .then(data => setMemes(data))
  }, [meme]);

  function getMeme() {
    setMeme(prevstate => (
      {
        ...prevstate,
        clicked: true

      }
    ))
  }
  function toggleMode() {
    setMode(prevstate => !prevstate);
  }
  return (
    <div style={styles} className='main'>
      <Header mode={toggleMode} theme={mode} />
      <MemeGenerator meme={memes} handleClick={getMeme} />
    </div>
  );
}

export default App;
