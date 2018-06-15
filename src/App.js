/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, max-len, no-undef */

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
import './css/bootstrap.min.css';
import './css/style.css';

// const POSTS = [
//   {
//     postId: 0,
//     title: 'Society for Neurological Rare Disorders',
//     desc: 'UX, Visual, RWD, CMS(Wordpress), Bootstrap',
//     cat: 'Website Project',
//     thumb: 'images/project-snerd.jpg',
//     time: 'Fri Jun 15 2018 13:01:38',
//     article: 'Post for Snerd, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quasi explicabo atque, assumenda veritatis quam, natus est eaque ad accusantium dolorem omnis iste animi laborum earum totam perspiciatis molestiae ab iusto et architecto voluptate ea. Ut, assumenda voluptate. Voluptas, voluptate!',
//   },
//   {
//     postId: 1,
//     title: 'NTU Internation Students Information Service',
//     desc: 'Posters, Flyers, Course Design',
//     cat: 'Visual Design',
//     thumb: 'images/visual-isie.jpg',
//     time: 'Fri Jun 15 2018 13:07:58',
//     article: 'Post for ISIE, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quasi explicabo atque, assumenda veritatis quam, natus est eaque ad accusantium dolorem omnis iste animi laborum earum totam perspiciatis molestiae ab iusto et architecto voluptate ea. Ut, assumenda voluptate. Voluptas, voluptate!',
//   },
// ];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/posts')
      .then(response => response.json())
      .then(json => this.setState({ posts: json }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route
            exact
            path="/"
            render={props => <Archive {...props} posts={this.state.posts} />}
          />
          <Route path="/login" component={Login} />
          <Route
            path="/single/:postId"
            render={props => <Single {...props} posts={this.state.posts} />}
          />
          <Route path="/newpost" component={NewPost} />
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
