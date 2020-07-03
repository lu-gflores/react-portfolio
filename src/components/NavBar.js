import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-brand" to="/">
          George Flores
        </Link>
        
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>


      </div>
        <div className="navbar-menu">
          <ul className="navbar-end">
            <li className='navbar-item'>
              <Link to='/'
                className={window.location.pathname === '/' || window.location.pathname === '/about'
                  ? 'nav-link active' : 'nav-link'
                }
              >
                About
          </Link>
            </li>
            
            <li className='navbar-item'>
              <Link to='/'
                className={window.location.pathname === '/' || window.location.pathname === '/portfolio'
                  ? 'nav-link active' : 'nav-link'
                }
              >
                Portfolio
          </Link>

            </li>
            <li className='navbar-item'>
              <Link to='/'
                className={window.location.pathname === '/' || window.location.pathname === '/contact'
                  ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
          </Link>
            </li>
          </ul>
        </div>



    </nav>


  )
}

export default NavBar;