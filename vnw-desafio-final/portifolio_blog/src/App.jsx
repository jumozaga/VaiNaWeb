import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App
