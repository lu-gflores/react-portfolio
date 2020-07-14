import React from 'react'
import Avatar from "../images/avatar.jpg"
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
                            I'm a full stack developer and a Computer Science graduate of UNC Charlotte based around Charlotte, NC. 
                            I have a diverse experience in
                    </p>
                    </div>

                    <div className="column is-one-quarter">
                        <figure className="image" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <img className="is-rounded" src={Avatar} alt="Avatar of George Flores" style={{ width: "250px", height: "250px" }} />
                        </figure>
                    </div>

                    <div className="column is-half">
                        <p className="subtitle is-5 intro">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Me
