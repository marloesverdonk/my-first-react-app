import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import LightSwitch from './components/LightSwitch';
import UserBoard from './components/UserBoard';
import Clock from'./components/Clock';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Codaisseur!</h2>
          <main>  
            <Title content="Toggle the switch" />
            <LightSwitch  />
            <UserBoard content="Userboard:"/> 
            <Clock />         
          </main>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
