import React from 'react'
import NavBar from './NavBar'

const styles ={
    section: {
        opacity: 0.5
    }
}


const Hero = () => {
    return (
        <section style={styles.section} className="hero is-dark">
            <div className="hero-body">
           
            <NavBar/>
           
            </div>
        </section>
    )
}
export default Hero;