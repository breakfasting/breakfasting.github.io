/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, max-len */

import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="container mt-auto mb-auto d-flex justify-content-center">
        <div className="col-md-6 bg-white p-3">
          <h1>&frasl;&frasl; Login<span className="design">.</span></h1>
          <form className="pt-3">
            <div className="form-group">
              <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value="admin@example.com" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-dark ml-auto mt-3">Submit</button>
          </form>
        </div>
      </div>

    );
  }
}

export default Login;
