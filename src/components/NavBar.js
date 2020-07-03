import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
          </Link>
      
          <Link role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>
      
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              About Me
            </a>
      
            <a className="navbar-item">
              Portfolio
            </a>
    
              <a className="navbar-item">
                Contact Me
              </a>
          </div>
        </div>
      </nav>
    

    )
}

export default NavBar;