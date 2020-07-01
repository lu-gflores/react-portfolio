import React from 'react';
import NavBar from './components/NavBar'
import Card from './components/Card'
import 'bulma/css/bulma.css'
import Footer from './components/Footer';

function App() {
  return (

    <div className="App">
    <NavBar/>
    <Card/>

    <Footer/>
    </div>
  );
}

export default App;
