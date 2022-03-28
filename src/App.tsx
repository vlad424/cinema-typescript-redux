import React from 'react';

import './assets/css/app.css'
import Navigation from './components/header/navigation/Navigation';
import Slider from './components/header/slider/Slider';
import Movies from './components/main/Movies';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navigation/>
        <Slider/>
      </header>
      <main className="main">
        <Movies/>
      </main>
    </div>
  );
}

export default App;
