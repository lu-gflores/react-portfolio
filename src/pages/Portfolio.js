import React from 'react'
import '../styles/Portfolio.css'
import DayPlanner from '../images/dayplanner.JPG'
import NoteTaker from '../images/note.jpg'
import FitnessTracker from '../images/addingWorkout.JPG'
import EmployeeDir from '../images/main.jpg'
const Portfolio = () => {
    return (
        <>
            <h1 className="title is-1 has-text-centered">Portfolio</h1>

                <div className="columns is-multiline">

                <section className="column is-half is-offset" data-aos="fade-up-right">
                <section className="card">
                <header className="title has-text-centered">Day Planner</header>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={DayPlanner} alt="Dayplanner app" />
                    </figure>

                  </div>
                  <div className="card-content has-text-centered">
                  
                    <a className="button is-medium" href="https://github.com/lu-gflores/Day-Planner" target="_blank">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </a>
                    <a className="button is-medium" href="https://lu-gflores.github.io/Day-Planner/" target="_blank">
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
                  
                    <a className="button is-medium" href="https://github.com/lu-gflores/Note-Taker" target="_blank">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </a>
                    <a className="button is-medium" href="https://server-note-taker.herokuapp.com/" target="_blank">
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
                  
                    <a className="button is-medium" href="https://github.com/lu-gflores/Employee-Directory" target="_blank">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </a>
                    <a className="button is-medium" href=" https://lu-gflores.github.io/Employee-Directory/" target="_blank">
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
                  
                    <a className="button is-medium" href="https://github.com/lu-gflores/Fitness-Tracker" target="_blank">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </a>
                    <a className="button is-medium" href=" https://peaceful-plains-60500.herokuapp.com/" target="_blank">
                      <span className="icon">
                        <i className="fa fa-rocket"></i>
                      </span>
                      <span>Link</span>
                    </a>
                  </div>
                </section>
            </section>




            </div>
        </>
    )
}
export default Portfolio;