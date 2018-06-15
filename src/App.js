/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension */

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navbar from './Navbar';
import Archive from './Archive';
import Footer from './Footer';
import Single from './Single';
import Login from './Login';
import NewPost from './NewPost';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Archive} />
          <Route path="/login" component={Login} />
          <Route path="/single" component={Single} />
          <Route path="/newpost" component={NewPost} />
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
