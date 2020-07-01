import React from 'react'
import '../Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
            <a className="social-links" href="https://www.linkedin.com/in/george-flores-a84b24157/" target="_blank"><i className="icon-link fab fa-linkedin"></i></a>
      <a className="social-links" href="https://github.com/lu-gflores" target="_blank"><i className="icon-link fab fa-github"></i></a>
      <a href="mailto:georgeflores886@gmail.com" className="social-links"><i className="icon-link fas fa-envelope"></i></a>
                <p>&copy; Copyright 2020. Created by George Flores</p>
            </div>
        </footer>
    )
}
export default Footer;