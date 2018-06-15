/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, max-len, jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand mr-auto" to="/">
            <img src="images/logo.png" width="100" height="100" alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item active">
                <Link className="nav-link" to="/">POSTS</Link>
              </li>
              <li className="nav-item mr-2">
                <Link className="nav-link" to="/newpost">NEW</Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <Link className="badge badge-dark my-2" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
