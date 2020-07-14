import React from 'react'
import '../styles/Portfolio.css'
import DayPlanner from '../images/dayplanner.JPG'
import NoteTaker from '../images/note.jpg'
import FitnessTracker from '../images/addingWorkout.JPG'
import EmployeeDir from '../images/main.jpg'
const Portfolio = () => {
    return (
        <>
          <section className="hero is-dark is-large" data-aos="flip-left">
            <div className="hero-body">
              <h1 className="title is-1 has-text-centered">Portfolio</h1>
              <h2 className="title is-4 has-text-centered">Here is my recent work</h2>
            </div>
          </section>
   
          <section className="hero is-medium is-primary">
            <div className="hero-body">
            <h1 className="title is-1 has-text-centered" data-aos="zoom-in">Let's Guess</h1>
               <figure className="image">
                  <img className="project-image" src="https://media.giphy.com/media/lr7Vf26ewmT76gKwu7/giphy.gif" style={{ width: "750px", height: "400px" }} alt="Let's Guess game app" data-aos="zoom-in"/>
                </figure>
                <div className="content has-text-centered">
                <article className="project-info">
                  <p className="subtitle is-5">A full stack app that allows users to guess who is who from a selection of characters to which questions
                are chosen based on their characteristics (hair color, wearing glasses, interesting facts, etc.)</p>
                </article>
                <a className="button is-medium" href="https://github.com/lynseahoss/Lets-Guess" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </a>
                    <a className="button is-medium" href="https://letsguess.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-rocket"></i>
                      </span>
                      <span>Demo</span>
                    </a>
                </div>
            </div>
          </section>


          <section className="hero is-medium is-warning">
            <div className="hero-body">
            <h1 className="title is-1 has-text-centered" data-aos="zoom-out">Fitness Tracker</h1>
               <figure className="image">
                  <img className="project-image" src={FitnessTracker} alt="Fitness Tracker app" style={{ width: "750px", height: "400px" }} data-aos="zoom-out"/>
                </figure>
                <div className="content has-text-centered">
                <a className="button is-medium" href="https://github.com/lu-gflores/Fitness-Tracker" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </a>
                    <a className="button is-medium" href=" https://peaceful-plains-60500.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-rocket"></i>
                      </span>
                      <span>Demo</span>
                    </a>
                </div>
            </div>
          </section>


      

          <section className="hero is-medium is-primary">
            <div className="hero-body">
            <h1 className="title is-1 has-text-centered" data-aos="flip-right">Day Planner</h1>
               <figure className="image">
                  <img className="project-image" src={DayPlanner} style={{ width: "750px", height: "400px" }} alt="Dayplanner app" data-aos="flip-right"/>
                </figure>
                <div className="content has-text-centered">
                  
                  <a className="button is-medium" href="https://github.com/lu-gflores/Day-Planner" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                      <i className="fa fa-code"></i>
                    </span>
                    <span>Code</span>
                  </a>
                  <a className="button is-medium" href="https://lu-gflores.github.io/Day-Planner/" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                      <i className="fa fa-rocket"></i>
                    </span>
                    <span>Demo</span>
                  </a>
                </div>
            </div>
          </section>



           <section className="hero is-medium is-dark">
            <div className="hero-body">
            <h1 className="title is-1 has-text-centered" data-aos="flip-left">Note Taker</h1>
               <figure className="image">
                  <img className="project-image" src={NoteTaker} alt="Note Taker app" style={{ width: "750px", height: "400px" }} data-aos="flip-left"/>
                </figure>
                <div className="content has-text-centered">
                  
                <a className="button is-medium" href="https://github.com/lu-gflores/Note-Taker" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </a>
                    <a className="button is-medium" href="https://server-note-taker.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-rocket"></i>
                      </span>
                      <span>Demo</span>
                    </a>
                </div>
            </div>
          </section>




                {/* <div className="columns is-multiline">

                <section className="column is-half is-offset" data-aos="fade-up-right">
                <section className="card">
                <header className="title has-text-centered">Day Planner</header>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={DayPlanner} alt="Dayplanner app" />
                    </figure>

                  </div>
                  <div className="card-content has-text-centered">
                  
                    <a className="button is-medium" href="https://github.com/lu-gflores/Day-Planner" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </a>
                    <a className="button is-medium" href="https://lu-gflores.github.io/Day-Planner/" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-rocket"></i>
                      </span>
                      <span>Link</span>
                    </a>
                  </div>

                </section>
            </section>
                
                <section className="column is-half is-offset-6" data-aos="fade-up-left">
                <section className="card">
                <header className="title has-text-centered">Note Taker</header>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={NoteTaker} alt="NoteTaker app" />
                    </figure>

                  </div>
                  <div className="card-content has-text-centered">
                  
                    <a className="button is-medium" href="https://github.com/lu-gflores/Note-Taker" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </a>
                    <a className="button is-medium" href="https://server-note-taker.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-rocket"></i>
                      </span>
                      <span>Link</span>
                    </a>
                  </div>
                </section>

                </section>
        
                <section className="column is-half is-offset" data-aos="fade-up-right">
                <section className="card">
                <header className="title has-text-centered">React Employee Directory</header>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={EmployeeDir} alt="Dayplanner app" />
                    </figure>

                  </div>
                  <div className="card-content has-text-centered">
                  
                    <a className="button is-medium" href="https://github.com/lu-gflores/Employee-Directory" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </a>
                    <a className="button is-medium" href=" https://lu-gflores.github.io/Employee-Directory/" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-rocket"></i>
                      </span>
                      <span>Link</span>
                    </a>
                  </div>

                </section>
            </section>
                

            <section className="column is-half is-offset-6" data-aos="fade-up-left">
                <section className="card">
                <header className="title has-text-centered">Fitness Tracker</header>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={FitnessTracker} alt="NoteTaker app" />
                    </figure>

                  </div>
                  <div className="card-content has-text-centered">
                  
                    <a className="button is-medium" href="https://github.com/lu-gflores/Fitness-Tracker" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </a>
                    <a className="button is-medium" href=" https://peaceful-plains-60500.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-rocket"></i>
                      </span>
                      <span>Link</span>
                    </a>
                  </div>
                </section>
            </section>




            </div> */}
        </>
    )
}
export default Portfolio;