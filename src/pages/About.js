import React from "react";
import Avatar from "../images/avatar.jpg"
import NavBar from '../components/NavBar'
import '../styles/About.css'
const About = () => {
    return (
        <>
        <div className="header-wrapper">
        <section className="hero is-small">
            <section className="hero-body">
                <div className="container has-text-centered">
                <div className="columns is-mobile is-centered">
                    <div className="column is-half has-text-centered">
                         <figure className="image is-128x128 is-inline-block">
                            <img className="is-rounded" src={Avatar} alt="Avatar of George Flores"/>
                         </figure>
                    </div>
                </div>
                    <h1 className="subtitle">Hey there, I'm</h1>
                    <h2 className="title">George</h2>
                    <h1 className="subtitle profession">A Full Stack Developer</h1>
                </div>
            </section>
        </section>
        </div>
         
        <div className="main-content">
      <div className="section-light about-me" id="about-me">
        <div className="container">
          <div className="column is-12 about-me">
            <h1 className="title has-text-centered section-title">About Me</h1>
          </div>
          <div className="columns is-multiline">
            <div
              className="column is-6 has-vertically-aligned-content"
              data-aos="fade-right"
            >
              <p className="is-larger">
                &emsp;&emsp;<strong
                  >Showcase is a modern, beautiful personal website template to
                  showcase who you are, as well as projects you've worked on in
                  the past.</strong>
              </p>
              <br />
              <p>
                Showcase was built from the ground up with Bulma to be fast and
                responsive out of the box with all source files well documented
                for easy to customization. The Showcase template gives you a
                personal space to share what you are all about as a creative
                designer, developer, photographer, and more!
              </p>
              <br/>
              <div className="is-divider"></div>
              <div className="columns about-links">
                <div className="column">
                  <p className="heading">
                    <strong>Give me a ring</strong>
                  </p>
                  <p className="subheading">
                    123-456-7890
                  </p>
                </div>
                <div className="column">
                  <p className="heading">
                    <strong>Email Me</strong>
                  </p>
                  <p className="subheading">
                    hello@example.com
                  </p>
                </div>
                <div className="column">
                  <p className="heading">
                    <strong>View my portfolio</strong>
                  </p>
                  <p className="subheading">
                    example.com
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-6 right-image " data-aos="fade-left">
              <img
                className="is-rounded"
                src="https://picsum.photos/id/366/600/375"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

    );
}

export default About;
