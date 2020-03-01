import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar/NavBar';

class App extends Component {
  render() {
    return <NavBar logo={logo} />;
  }
}

export default App;
