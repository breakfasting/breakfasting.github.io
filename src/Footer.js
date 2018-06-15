/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, max-len, jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="py-5">
        <div className="container d-flex justify-content-end">
          <span className="mr-3">© 2018 by Wayne Su</span>
          <Link to="/">
            <h1><u>backToHome()</u><span className="design">;</span></h1>
          </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
