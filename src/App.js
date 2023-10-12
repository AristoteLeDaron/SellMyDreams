import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

      </Router>
      <p>Hello World</p>
    </div>
  );
}

export default App;