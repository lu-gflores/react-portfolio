import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//components
import NavBar from './components/NavBar'
import Wrapper from './components/Wrapper'
import Hero from './components/Hero'

//pages
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

//css
import 'bulma/css/bulma.css'
import './styles/AppStyle.css'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App container">
        <Hero />
        <Wrapper>
          <Route exact path='/' component={About} />
          <Route exact path = '/about' component={About}/>
          <Route exact path="/contact" component={Contact} />
         <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
