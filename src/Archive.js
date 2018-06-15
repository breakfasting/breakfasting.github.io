/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, max-len, react/prop-types, jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="container d-flex justify-content-center">
      <div className="head d-inline-flex flex-column justify-content-center">
        <div>
          <h1>
            &gt;_Hi! I&apos;m Wayne Su,
          </h1>
        </div>
        <div className="spaces">
          <h1>And I&apos;m passionate about <u className="code">coding</u>, <u className="science">data science</u> &amp; <u className="design">visual design</u>!
          </h1>
        </div>
      </div>
    </header>
  );
}

function Block(props) {
  return (
    <div className="col-md-6 col-lg-5 mt-4">
      <Link to={`/single/${props.postId}`}>
        <div className="img-container">
          <img className="img-fluid" src={props.thumb} alt="" />
          <div className="overlay" />
          <div className="text d-flex flex-column justify-content-center text-center">
            <span>{props.title}</span>
            <small>{props.desc}</small>
          </div>
        </div>
      </Link>
    </div>
  );
}

// function Posts() {
//   return (
//     <section>
//       <div className="container py-5">
//         <h1>
//           &frasl;&frasl; Posts
//           <span className="design">.</span>
//         </h1>
//         <p className="text-muted">Last Updated 2018-04-29</p>
//         <div className="row justify-content-center">
//           <div className="col-md-6 col-lg-5 mt-4">
//             <div className="img-container">
//               <img className="img-fluid" src="images/project-ntuac.jpg" alt="" />
//               <div className="overlay" />
//               <div className="text d-flex flex-column justify-content-center text-center">
//                 <span>NTU Global Lounge Activity Calendar</span>
//                 <small>UX, Vanilla JavaScript, HTML, CSS</small>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6 col-lg-5 mt-4">
//             <div className="img-container">
//               <img className="img-fluid" src="images/project-sfbms2016.jpg" alt="" />
//               <div className="overlay" />
//               <div className="text d-flex flex-column justify-content-center text-center">
//                 <span>SFBMS, EAJS, CSSBMR 2016</span>
//                 <small>UX, Visual, Partial RWD, HTML, CSS</small>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6 col-lg-5 mt-4">
//             <a href="project-snerd.html">
//               <div className="img-container">
//                 <img className="img-fluid" src="images/project-snerd.jpg" alt="" />
//                 <div className="overlay" />
//                 <div className="text d-flex flex-column justify-content-center text-center">
//                   <span>Society for Neurological Rare Disorders</span>
//                   <small>UX, Visual, RWD, CMS(Wordpress), Bootstrap</small>
//                 </div>
//               </div>
//             </a>
//           </div>

//           <div className="col-md-6 col-lg-5 mt-4">
//             <div className="img-container">
//               <img className="img-fluid" src="images/project-ndg.jpg" alt="" />
//               <div className="overlay" />
//               <div className="text d-flex flex-column justify-content-center text-center">
//                 <span>Neuroscience Discussion Group</span>
//                 <small>UX, PHP, session, HTML, CSS</small>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6 col-lg-5 mt-4">
//             <div className="img-container">
//               <img className="img-fluid" src="images/visual-isie.jpg" alt="" />
//               <div className="overlay" />
//               <div className="text d-flex flex-column justify-content-center text-center">
//                 <span>NTU Internation Students Information Service</span>
//                 <small>Posters, Flyers, Course Design</small>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6 col-lg-5 mt-4">
//             <div className="img-container">
//               <img className="img-fluid" src="images/visual-italy.jpg" alt="" />
//               <div className="overlay" />
//               <div className="text d-flex flex-column justify-content-center text-center">
//                 <span>Family Travel Booklet</span>
//                 <small>Booklet Design, Itinerary Planning</small>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

class Archive extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <div className="container py-5">
            <h1>
              &frasl;&frasl; Posts
              <span className="design">.</span>
            </h1>
            <p className="text-muted">Last Updated 2018-04-29</p>
            <div className="row justify-content-center">
              {this.props.posts.map(({
                postId, title, desc, thumb,
              }) => (
                <Block key={postId} postId={postId} title={title} desc={desc} thumb={thumb} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Archive;
