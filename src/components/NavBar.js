import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = () => {

  const [isActive, setisActive] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-brand" to="/">
          George Flores
        </Link>

        {/*Need to set up hamburger style for links*/}
        <label 
        onClick= {()=>setisActive(!isActive)}
        role="button" 
        className={`navbar-burger burger ${isActive ? "is-active" : ""}`} 
        aria-label="menu" 
        aria-expanded="false"
        htmlFor="nav-toggle-state">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </label>
      </div>

        <div  className={`navbar-menu ${isActive ? "is-active" : ""}`}>
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
              <Link to='/portfolio'
                className={window.location.pathname === '/' || window.location.pathname === '/portfolio'
                  ? 'nav-link active' : 'nav-link'
                }
              >
                Portfolio
          </Link>

            </li>
            <li className='navbar-item'>
              <Link to='/contact'
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