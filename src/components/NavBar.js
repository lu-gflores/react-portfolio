import React, {useState} from 'react';
import { NavLink} from 'react-router-dom'
import Resume from '../images/GeorgeFlores_Resume.pdf'
import '../styles/NavBar.css'

const NavBar = () => {

  const [isActive, setisActive] = useState(false);

  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
   
    <a 
    role="button" 
    className={`navbar-burger burger ${isActive ? "is-active" : ''}`} 
    aria-label="menu" 
    aria-expanded="false" 
    data-target="navbarBasicExample"
    onClick={() =>setisActive(!isActive)}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ''}`}>
    <div className="navbar-end">
      <NavLink className='navbar-item has-text-centered'
      to='/'
      onClick={()=>{
            setisActive(!isActive)
          }}  
      >
        About
      </NavLink>

      <NavLink className="navbar-item has-text-centered"
      to='/portfolio'
      onClick={()=>{
            setisActive(!isActive)
          }}  
      >
        Portfolio
      </NavLink>

     
      <NavLink className="navbar-item has-text-centered"
      to='/contact'
      onClick={()=>{
            setisActive(!isActive)
          }}  
      >
          Contact
      </NavLink> 
      
      <NavLink className="navbar-item has-text-centered" to={Resume} target="_blank">
          Resume
      </NavLink>

    </div>

  </div>
</nav>
  )
}

export default NavBar;