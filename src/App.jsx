import React from 'react';
import Countdown from './Countdown';
import Gallery from './Gallery';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>❤️ Un poquito de nuestra historia ❤️</h1>
      </header>
      <main>
        <Countdown />
        <Gallery />
      </main>
      <footer className="footer">
        <p>Con amor, Thiara. 💕</p>
      </footer>
    </div>
  );
}

export default App;
