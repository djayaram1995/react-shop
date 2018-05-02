import React, { Component } from 'react';
import logo from './comp.svg';
import './AppHeader.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="container-fluid App-header">
          <img src={logo} className="mr-2 App-logo" alt="logo" />
          <h1 className="App-title">Computer Shop</h1>
          
        </header>
      </div>
    );
  }
}

export default App;
