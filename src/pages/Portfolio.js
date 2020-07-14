import React from 'react'
import '../styles/Portfolio.css'
import DayPlanner from '../images/dayplanner.JPG'
import NoteTaker from '../images/note.jpg'
import FitnessTracker from '../images/addingWorkout.JPG'
import TeamGen from '../images/teampage.jpg'
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
   
          <section className="hero is-medium is-light">
            <div className="hero-body">
            <h1 className="title is-1 has-text-centered" data-aos="zoom-in">Let's Guess</h1>
               <figure className="image">
                  <img className="project-image" src="https://media.giphy.com/media/lr7Vf26ewmT76gKwu7/giphy.gif" style={{ width: "750px", height: "400px" }} alt="Let's Guess game app" data-aos="zoom-in"/>
                </figure>
                <div className="content has-text-centered">
                <article className="project-info">
                  <p className="subtitle is-5">A full stack app that allows users to guess who is who from a selection of characters to which questions
                are chosen based on their characteristics (hair color, wearing glasses, interesting facts, etc.) Technologies used include React, NodeJS, Express, Mongoose, MongoDB, and Bulma CSS</p>
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


          <section className="hero is-medium is-dark">
            <div className="hero-body">
            <h1 className="title is-1 has-text-centered" data-aos="zoom-out">Fitness Tracker</h1>
               <figure className="image">
                  <img className="project-image" src={FitnessTracker} alt="Fitness Tracker app" style={{ width: "750px", height: "400px" }} data-aos="zoom-out"/>
                </figure>
                <div className="content has-text-centered">
                <article className="project-info">
                  <p className="subtitle is-5">A fitness app that trackers users' progress in their daily workout. They can log and track mulitiple exercises in a workout session based
                  on the given day. Technolgies used include NodeJS, Mongoose and Express.</p>
                </article>
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

          <section className="hero is-medium is-danger">
            <div className="hero-body">
            <h1 className="title is-1 has-text-centered" data-aos="flip-right">Team Generator</h1>
               <figure className="image">
                  <img className="project-image" src={TeamGen} alt="Team Profile Generator app" style={{ width: "750px", height: "400px" }} data-aos="flip-right"/>
                </figure>
                <div className="content has-text-centered">
                <article className="project-info">
                  <p className="subtitle is-5">A Node CLI that generates a team by inputing a team manager, team members, and each team member's roles, which then 
                  generates an html file to display the roster based on information provided. Technologies used in include NodeJS and Inquirier package. </p>
                </article>
                <a className="button is-medium" href="https://github.com/lu-gflores/Team-Profile-Generator" target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </a>
                    <button className="button is-medium" title="Must be cloned from repo to run" disabled target="_blank" rel="noopener noreferrer">
                      <span className="icon">
                        <i className="fa fa-rocket"></i>
                      </span>
                      <span>Demo</span>
                    </button>
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
                <article className="project-info">
                  <p className="subtitle is-5">A schedule app that allows users to log hourly events from (9am to 5pm) so they can manage their time more efficiently. Their events
                  is saved in local storage. Meaning after closing their web browser, their input is still saved when they return to the application.
                  Technologies used include BootStrap and jQuery.</p>
                </article>
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



           <section className="hero is-medium is-light">
            <div className="hero-body">
            <h1 className="title is-1 has-text-centered" data-aos="flip-left">Note Taker</h1>
               <figure className="image">
                  <img className="project-image" src={NoteTaker} alt="Note Taker app" style={{ width: "750px", height: "400px" }} data-aos="flip-left"/>
                </figure>
                <div className="content has-text-centered">
                <article className="project-info">
                  <p className="subtitle is-5">A note taking app that allows users to write, save, and delete notes. This uses a backend server to store and retrieve
                  data from a JSON file. Technologies used include Express, NodeJS, and BootStrap.</p>
                </article>
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