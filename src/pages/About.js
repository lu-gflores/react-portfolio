import React from "react";
import Me from '../components/Me'
import Recent from '../components/Recent'
import Avatar from "../images/avatar.jpg"
import '../styles/About.css'

 
const About = () => {
  return (
    <>
      <div className="container is-fluid has-text-centered" >
      <figure className="image is-128x128 is-inline-block" data-aos="fade-up">
                  <img className="is-rounded" src={Avatar} alt="Avatar of George Flores" />
          </figure>

          <article className="intro-body is-rounded" data-aos="fade-up">
            <h1 className="title is-1 has-text-white" >Hey there, I'm George Flores.</h1>
          <h1 className="title is-2 has-text-white">A Full Stack Developer</h1>
          </article>
      </div>
        
      <Me/>
      <Recent/>

    </>

  );
}

export default About;
