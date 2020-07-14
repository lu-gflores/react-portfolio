import React from 'react'
import {NavLink} from 'react-router-dom'
import TrailHeads from "../images/homePage.jpg"
import ShopByYou from '../images/shopByYou.jpg'
import '../styles/Recent.css'

const Recent = () => {
    return (
        <>
        <section className="hero is-small"> 
            <div className="hero-body">
            <h1 className="title is-1 has-text-centered">Projects</h1>
            </div>
        </section>

        <div className="columns is-multiline">
            <section className="hero is-small column is-half">
            <div className="hero-body">
            <h1 className="title is-3 has-text-centered" data-aos="fade-right">TrailHeads</h1>
               <figure className="image">
                  <img className="project-image" src={TrailHeads} style={{ width: "750px", height: "400px" }} alt="Trailheads app" data-aos="fade-right"/>
                </figure>
                <div className="content has-text-centered">
                <article className="project-info">
                  <p className="subtitle is-5" data-aos="fade-right">Trail finder app that allows users to locate nearby trails, parks, mountains, etc. in a specific city.
                  Technologies used include Tailwind CSS, jQuery, Swiper.js, Hiking Project Data API and Openweather API. 
                  </p>
                </article>
                <a className="button is-medium" href="https://github.com/lu-gflores/TrailHeads" target="_blank" rel="noopener noreferrer" data-aos="fade-right">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </a>
                    <a className="button is-medium" href="https://lu-gflores.github.io/TrailHeads/" target="_blank" rel="noopener noreferrer" data-aos="fade-right">
                      <span className="icon">
                        <i className="fa fa-rocket"></i>
                      </span>
                      <span>Demo</span>
                    </a>
                </div>
            </div>
        </section>

        <section className="hero is-small column is-half">
            <div className="hero-body">
            <h1 className="title is-3 has-text-centered" data-aos="fade-left">ShopByYou</h1>
               <figure className="image">
                  <img className="project-image" src={ShopByYou} style={{ width: "750px", height: "400px" }} alt="ShopByYou app" data-aos="fade-left"/>
                </figure>
                <div className="content has-text-centered">
                <article className="project-info">
                  <p className="subtitle is-5" data-aos="fade-left">A shopping app that allows users to shop and sell uniqute items online. They can search through specific
                  categories to find items they seek and post their own as well. Technologies used include NodeJS, Express, Handlebars, multer, passport, and jQuery.</p>
                </article>
                <a className="button is-medium" href="https://github.com/lu-gflores/ShopByYou" target="_blank" rel="noopener noreferrer" data-aos="fade-left">
                      <span className="icon">
                        <i className="fa fa-code"></i>
                      </span>
                      <span>Code</span>
                    </a>
                    <a className="button is-medium" href="https://shopbyyou.herokuapp.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-left">
                      <span className="icon">
                        <i className="fa fa-rocket"></i>
                      </span>
                      <span>Demo</span>
                    </a>
                </div>
            </div>
        </section>
        <div className="has-text-centered">
            <NavLink className="button is-info is-rounded is-medium is-fullwidth" to='/portfolio'>See more here!</NavLink>
          </div>
    </div>
        </>
    )
}

export default Recent
