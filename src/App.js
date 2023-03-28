import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  render() { //react lifecycle components , render jsx ko html me compile krta h phir display krta h screen pr

    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

