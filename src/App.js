import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavbar from './components/layout/AppNavBar';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <AppNavbar />
      <div className="container">
        <h1>Hello World</h1>
      </div>
    </div>
    </Router>
  );
}

export default App;
