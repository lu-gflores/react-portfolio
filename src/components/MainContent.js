import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import About from '../pages/About'
import Portfolio from  '../pages/Portfolio'
import Contact from '../pages/Contact'
import '../styles/MainContent.css'
const MainContent = () => {
    return (
        <div>
         <Router>  
           <NavBar/>  
          <Route exact path='/' component={About} />  
          <Route exact path="/contact" component={Contact} />
         <Route exact path="/portfolio" component={Portfolio} />   
         </Router>
        </div>
    )
}

export default MainContent



