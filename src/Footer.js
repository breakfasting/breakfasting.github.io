/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, max-len */

import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="py-5">
        <div className="container d-flex justify-content-end">
          <span className="mr-3">© 2018 by Wayne Su</span>
          <a href="#top">
            <h1><u>backToTop()</u><span className="design">;</span></h1>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
