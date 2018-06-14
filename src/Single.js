/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, max-len */

import React, { Component } from 'react';

function Header() {
  return (
    <header className="container d-flex justify-content-center bg-head" style={{ backgroundImage: 'url(images/project-snerd.jpg)' }}>
      <div className="head d-inline-flex flex-column justify-content-end">
        <div>
          <h1>&gt;_<span className="code">Website Project</span></h1>
        </div>
        <div className="spaces">
          <h1>Society for Neurological Rare Disorders, Taiwan</h1>
        </div>
      </div>
    </header>
  );
}

class Single extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <div className="container py-5">
            <h1>&frasl;&frasl; Article<span className="design">.</span></h1>
            <p className="text-muted">Last Updated 2018-04-29</p>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quasi explicabo atque, assumenda veritatis quam, natus est eaque ad accusantium dolorem omnis iste animi laborum earum totam perspiciatis molestiae ab iusto et architecto voluptate ea. Ut, assumenda voluptate. Voluptas, voluptate!
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Single;
