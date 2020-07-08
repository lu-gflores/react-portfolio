import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom'
// import '../styles/NavBar.css'

const NavBar = () => {

  const [isActive, setisActive] = useState(false);
  const location = useLocation();

  return (

    <nav className="navbar is-dark " role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/*BurgerMenu*/}
        <a 
          onClick= {()=>setisActive(!isActive)}
          role="button" 
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`} 
          aria-label="menu" 
          aria-expanded="false"
          htmlFor="nav-toggle-state"
          >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

        <div  className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <ul className="navbar-end">
            <li className='navbar-item'>
              <Link to='/'
                className={location.pathname === '/' || location.pathname === '/about'
                  ? 'nav-link is-active' : 'nav-link'
                }
              >
                About
          </Link>
            </li>
            
            <li className='navbar-item'>
              <Link to='/portfolio'
                className={location.pathname === '/portfolio' ? 'nav-link is-active' : 'nav-link'
                }
              >
                Portfolio
          </Link>

            </li>
            <li className='navbar-item'>
              <Link to='/contact'
                className={location.pathname === '/contact' ? 'nav-link is-active' : 'nav-link'
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