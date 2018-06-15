/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, max-len */

import React, { Component } from 'react';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      cat: 'Website Project',
      descr: '',
      article: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    fetch('http://localhost:8080/new', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json)
      .then(body => console.log(body));
    event.preventDefault();
  }

  render() {
    return (
      <div className="container mt-auto mb-auto d-flex justify-content-center">
        <div className="col-md-6 bg-white p-3">
          <h1>&frasl;&frasl; NewPost<span className="design">.</span></h1>
          <form onSubmit={this.handleSubmit} className="pt-3">
            <label htmlFor="postTitle" className="w-100">
              Title
              <input name="title" type="text" value={this.state.title} onChange={this.handleChange} className="form-control" id="postTitle" placeholder="Example Title" />
            </label>
            <label htmlFor="postCategory" className="pt-2">
              Post Category
              <select name="cat" value={this.state.cat} onChange={this.handleChange} className="form-control" id="postCategory">
                <option>Website Project</option>
                <option>Visual Design</option>
                <option>Other</option>
              </select>
            </label>
            <label htmlFor="postDesc" className="w-100">
              Description
              <input name="descr" type="text" value={this.state.descr} onChange={this.handleChange} className="form-control" id="postDesc" placeholder="A new post description" />
            </label>
            <label htmlFor="postBody" className="w-100 pt-2">
              Article
              <textarea name="article" value={this.state.article} onChange={this.handleChange} className="form-control" id="postBody" placeholder="Example Text" rows="3" />
            </label>
            <button type="submit" className="btn btn-dark ml-auto mt-3">Submit</button>
          </form>
        </div>
      </div>

    );
  }
}

export default NewPost;
