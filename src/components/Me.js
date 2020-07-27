import React from 'react'
import Avatar from "../images/avatar.jpg"
import HTMLlogo from '../images/html5logo.png'
import JavaScriptLogo from '../images/javascript.png'
import CSSLogo from '../images/css3.png'
import ReactLogo from '../images/reactlogo.png'
import '../styles/Me.css'
const Me = () => {
    const iconStyle = {
        color: 'black',
        margin: '1rem'
    }

    return (
        <section className="hero is-medium">
            <div className="hero-body has-background-grey-lighter">
                <h1 className="title article-title has-text-centered"
                    data-aos="fade-right"
                    data-aos-offset="250"
                    data-aos-easing="ease-in-sine"
                >
                    About me
                </h1>
                <div className="tags has-addons level-item" data-aos="zoom-in"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    <a className="social-links" href="https://www.linkedin.com/in/george-flores-a84b24157/" target="_blank" rel="noopener noreferrer"><i style={iconStyle} className="icon-link fab fa-linkedin"></i></a>
                    <a className="social-links" href="https://github.com/lu-gflores" target="_blank" rel="noopener noreferrer"><i style={iconStyle} className="icon-link fab fa-github"></i></a>
                    <a href="mailto:georgeflores886@gmail.com" className="social-links" ><i style={iconStyle} className="icon-link fas fa-envelope"></i></a>
                </div>
                <div className="columns is-multiline">
                    <div className="column is-three-quarters">
                        <p className="subtitle is-4 intro has-text-center" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            I'm a full stack developer and a Computer Science graduate of UNC Charlotte based around Charlotte, NC. While I have a diverse background
                            in the Computer Science field, I find myself drawn to the development field for its creativity, problem solving, and flexibility. 
                    </p>
                    </div>

                    <div className="column is-one-quarter">
                        <figure className="image" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <img className="is-rounded" src={Avatar} alt="Avatar of George Flores" style={{ width: "250px", height: "250px", paddingBottom:"1rem" }} />
                        </figure>
                    </div>

                    <div className="column is-half">
                    <h2 className="title is-3" data-aos="fade-right" data-aos-offset="200">What I can do</h2>
                    <figure className="image is-128x128 is-inline-block" data-aos="fade-right" data-aos-offset="200">
                         <img src={HTMLlogo} alt="html logo" />
                    </figure>
                    <figure className="image is-128x128 is-inline-block" data-aos="fade-right" data-aos-offset="200">
                         <img src={CSSLogo} alt="css logo" />
                    </figure>
                    <figure className="image is-128x128 is-inline-block" data-aos="fade-right" data-aos-offset="200">
                         <img src={JavaScriptLogo} alt="Javascript logo" />
                    </figure>
                    <figure className="image is-128x128 is-inline-block" data-aos="fade-right" data-aos-offset="200">
                         <img src={ReactLogo} alt="React logo" />
                    </figure>
                    </div>

                    <div className="column is-half">
                        <p className="subtitle is-4 intro" data-aos="fade-left" data-aos-offset="200">
                           While I have experience in these set languages, I also have worked in different concepts in Full Stack, including MongoDB, NodeJS, Express, 
                           Handlebars, and jQuery.
                    </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Me
