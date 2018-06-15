/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, max-len */

import React, { Component } from 'react';

class NewPost extends Component {
  render() {
    return (
      <div className="container mt-auto mb-auto d-flex justify-content-center">
        <div className="col-md-6 bg-white p-3">
          <h1>&frasl;&frasl; NewPost<span className="design">.</span></h1>
          <form className="pt-3">
            <label htmlFor="postTitle" className="w-100">
              Title
              <input type="text" className="form-control" id="postTitle" placeholder="Example Title" />
            </label>
            <label htmlFor="postCategory" className="pt-2">
              Post Category
              <select className="form-control" id="postCategory">
                <option>Website Project</option>
                <option>Visual Design</option>
                <option>Other</option>
              </select>
            </label>
            <label htmlFor="postDesc" className="w-100">
              Description
              <input type="text" className="form-control" id="postDesc" placeholder="A new post description" />
            </label>
            <label htmlFor="postBody" className="w-100 pt-2">
              Article
              <textarea className="form-control" id="postBody" placeholder="Example Text" rows="3" />
            </label>
            <button type="submit" className="btn btn-dark ml-auto mt-3">Submit</button>
          </form>
        </div>
      </div>

    );
  }
}

export default NewPost;
