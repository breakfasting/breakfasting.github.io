/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension */

import React, { Component } from 'react';
import Navbar from './Navbar';
import Archive from './Archive';
import Footer from './Footer';
import Single from './Single';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Single />
        <Footer />
      </div>
    );
  }
}

export default App;
