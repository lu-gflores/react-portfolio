import React from "react";
import Avatar from "../images/avatar.jpg"

import '../styles/About.css'
const iconStyle = {
  color: 'black'
}

const About = () => {
  return (
    <>
          <div className="container has-text-centered">
          <div className="columns is-mobile is-centered">
            <div className="column is-half has-text-centered">
              <figure className="image is-128x128 is-inline-block">
                <img className="is-rounded" src={Avatar} alt="Avatar of George Flores" />
              </figure>
            </div>
          </div>
          
        </div>


      <section className="article">
        <div className="column is-8 is-offset-2">
          <div className="card article">
            <div className="card-content">
              <div classname="media">
                  <article className="media-content has-text-centered">
                    <p className="title article-title">About me</p>
                    <div className="tags has-addons level-item">
                    <a className="social-links" href="https://www.linkedin.com/in/george-flores-a84b24157/" target="_blank"><i style={iconStyle} className="icon-link fab fa-linkedin"></i></a>
                    <a className="social-links" href="https://github.com/lu-gflores" target="_blank"><i style={iconStyle} className="icon-link fab fa-github"></i></a>
                    <a href="mailto:georgeflores886@gmail.com" className="social-links"><i style={iconStyle} className="icon-link fas fa-envelope"></i></a>
                    </div>
                  </article>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  );
}

export default About;
