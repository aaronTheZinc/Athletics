import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './router';
import { isUnparsedPrepend } from 'typescript';
import { Nav } from './components/nav';

function App() {
  return (
    <div className="App">
      <title> Renaissance Highschool</title>
      <Nav />
      <Routes />
    </div>
  );
}

export default App;
