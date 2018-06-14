/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, max-len */

import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand mr-auto" href="index.html">
            <img src="images/logo.png" width="100" height="100" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">WORKS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">ABOUT</a>
              </li>
              <li className="nav-item mr-2">
                <a className="nav-link" href="http://140.122.143.108/resume0429.pdf">RESUME</a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a href="login.html" className="badge badge-dark my-2">Admin</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
