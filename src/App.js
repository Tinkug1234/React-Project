import React, { Component } from 'react'
import BasicExample from './BasicExample';
import './App.css';
import Banner from './Banner';
import Dropdown from './Dropdown';
import { Refer } from './Refer';
import Or from './Or';
import Footer from './Footer';




class App extends Component {
  render() {
    return (
      <div>

        <BasicExample />
        <Banner />
        <Dropdown />
        <Refer />
        <Or />
        <Footer />
      </div>
    )
  }
}

export default App;