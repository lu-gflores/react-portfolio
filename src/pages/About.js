import React from "react";
import {NavLink} from 'react-router-dom'
import Avatar from "../images/avatar.jpg"
import TrailHeads from "../images/homePage.jpg"
import ShopByYou from '../images/shopByYou.jpg'
import '../styles/About.css'

const iconStyle = {
  color: 'black'
}
 

const About = () => {
  return (
    <>
      <div className="container is-fluid has-text-centered" >
      <figure className="image is-128x128 is-inline-block" data-aos="fade-up">
                  <img className="is-rounded" src={Avatar} alt="Avatar of George Flores" />
          </figure>

          <article className="intro-body is-rounded" data-aos="fade-up">
            <h1 className="title is-1 has-text-white-ter" >Hey there, I'm George.</h1>
          <h1 className="title is-2 has-text-white">A Full Stack Developer</h1>
          </article>
      </div>
        


      <section data-aos="fade-right" data-aos-anchor-placement="center-bottom">
        <div className="column is-8 is-offset-2">
          <div className="card article card-shadow">
            <div className="card-content">
              <div className="media">
                <article className="media-content has-text-centered">
                  
                  <p className="title article-title">About me</p>
                  <div className="tags has-addons level-item">
                    <a className="social-links" href="https://www.linkedin.com/in/george-flores-a84b24157/" target="_blank" rel="noopener noreferrer"><i style={iconStyle} className="icon-link fab fa-linkedin"></i></a>
                    <a className="social-links" href="https://github.com/lu-gflores" target="_blank" rel="noopener noreferrer"><i style={iconStyle} className="icon-link fab fa-github"></i></a>
                    <a href="mailto:georgeflores886@gmail.com" className="social-links" ><i style={iconStyle} className="icon-link fas fa-envelope"></i></a>
                  </div>
                  <p className="subtitle is-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                  culpa qui officia deserunt mollit anim id est laborum."</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* top projects */}
      <div className="column is-8 is-offset-2">
        <section className="card" data-aos="fade-up" data-aos-placement="bottom-bottom">
          <div className="card-content">
            <h1 className="title has-text-centered">Projects</h1>

            <div className="columns">
              {/* TrailHeads */}
              <article className="column is-half">
                <section className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={TrailHeads} alt="TrailHeads app" />
                    </figure>

                  </div>
                  <div className="card-content has-text-centered">
                  
                    <a className="button is-medium" href="https://github.com/lu-gflores/TrailHeads" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </a>
                    <a className="button is-medium" href="https://lu-gflores.github.io/TrailHeads/" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-rocket"></i>
                      </span>
                      <span>Link</span>
                    </a>
                  </div>

                </section>
              </article>


              {/* Shop By You */}
              <article className="column is-half">
                <section className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={ShopByYou} alt="ShopByYou app" />
                    </figure>
                  </div>
                  <div className="card-content has-text-centered">
                      
                     <a className="button is-medium" href="https://github.com/lu-gflores/ShopByYou" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </a>

                    <a className="button is-medium" href="https://shopbyyou.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-rocket"></i>
                      </span>
                      <span>Link</span>
                    </a>
                  </div>

                </section>
              </article>

            </div>
          </div>

          <div className="has-text-centered">
            <NavLink className="button is-info is-rounded" to='/portfolio'>See more here!</NavLink>
          </div>
          

        </section>
      </div>

    </>

  );
}

export default About;
