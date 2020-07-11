import React from "react";
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
      <section>
        <div className="column is-8 is-offset-2">
          <div className="card article card-shadow">
            <div className="card-content">
              <div classname="media">
                <article className="media-content has-text-centered">
                  <figure className="image is-128x128 is-inline-block">
                    <img className="is-rounded" src={Avatar} alt="Avatar of George Flores" />
                  </figure>
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
      {/* top projects */}
      <div className="column is-8 is-offset-2">
        <section className="card">
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
                  <div className="card-content">
                  
                    <button className="button is-medium">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </button>
                  </div>

                </section>
              </article>


              {/* Shop By You */}
              <article className="column is-half">
                <section className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={ShopByYou} alt="TrailHeads app" />
                    </figure>
                  </div>
                  <div className="card-content">

                    <button className="button is-medium">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </button>
                  </div>

                </section>
              </article>

            </div>
          </div>

          <div className="has-text-centered">
            <button className="button is-info is-rounded">See more here!</button>
          </div>
          

        </section>
      </div>

    </>

  );
}

export default About;
