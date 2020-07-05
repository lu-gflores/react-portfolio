import React from "react";
import Avatar from "../images/avatar.jpg"
import TrailHeads from '../images/homePage.jpg'
import ShopByYou from '../images/shopByYou.jpg'
const About = () => {
    return (
        <div className="container">
       
        <div className="columns is-mobile is-centered">
            <div className="column is-half has-text-centered">
            <figure className="image is-128x128 is-inline-block">
            <img className="is-rounded" src={Avatar} alt="Avatar of George Flores"/>
        </figure>
            </div>
        </div>
        
        <article className="columns is-mobile">
        <div className="column is-three-fifths is-offset-one-fifth">
        <p className="content is-medium">
           Hey there. My name is George Flores and I am a full stack developer.
        </p>

        </div>
        </article>


        {/* Top projects */}
        <section className="columns is-mobile">
            <article className="column">
            <p className="bd-notification is-info">Projects</p>

            <div class="columns is-mobile">
                <div class="column">
                    <p class="bd-notification is-info">First nested column</p>
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={TrailHeads} alt="Trailheads Project"/>
                                    <div className="media-content">
                                        <p className="title is-4"> TrailHeads</p>
                                    </div>

                                    <p className="content">
                                        lkmsdlkmfdslkmfalskmf
                                    </p>
                                </figure>
                            </div>
                        </div>
                </div>

                <div class="column">
                    <p class="bd-notification is-info">Second column</p>
                </div>
            </div>
            </article>
        </section>
        </div>

    );
}

export default About;
