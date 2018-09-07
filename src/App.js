import React, { Component } from 'react';
import NavBar from './Component/NavBar';
import Counters from './Component/Counters'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Counters/>
      </div>
    );
  }
}

export default App;
