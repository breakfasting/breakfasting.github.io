/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, max-len, react/prop-types, prefer-template */

import React, { Component } from 'react';

function Header(props) {
  return (
    <header className="container d-flex justify-content-center bg-head" style={{ backgroundImage: 'url(../' + props.thumb + ')' }}>
      <div className="head d-inline-flex flex-column justify-content-end">
        <div>
          <h1>&gt;_<span className="code">{props.cat}</span></h1>
        </div>
        <div className="spaces">
          <h1>{props.title}</h1>
        </div>
      </div>
    </header>
  );
}

class Single extends Component {
  render() {
    const post = this.props.posts[this.props.match.params.postId];
    return (
      <div>
        <Header cat={post.cat} title={post.title} thumb={post.thumb} />
        <section>
          <div className="container py-5">
            <h1>&frasl;&frasl; Article<span className="design">.</span></h1>
            <p className="text-muted">Posted {post.time}</p>
            <p className="py-3">
              {post.article}
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Single;
