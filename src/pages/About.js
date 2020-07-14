import React from "react";
import {NavLink} from 'react-router-dom'
import Me from '../components/Me'
import Avatar from "../images/avatar.jpg"
import TrailHeads from "../images/homePage.jpg"
import ShopByYou from '../images/shopByYou.jpg'
import '../styles/About.css'

 
const About = () => {
  return (
    <>
      <div className="container is-fluid has-text-centered" >
      <figure className="image is-128x128 is-inline-block" data-aos="fade-up">
                  <img className="is-rounded" src={Avatar} alt="Avatar of George Flores" />
          </figure>

          <article className="intro-body is-rounded" data-aos="fade-up">
            <h1 className="title is-1 has-text-white" >Hey there, I'm George.</h1>
          <h1 className="title is-2 has-text-white">A Full Stack Developer</h1>
          </article>
      </div>
        
      <Me/>
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
