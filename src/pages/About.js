import React from "react";
import Image from "../images/myAvatar.jpg"

const About = () => {
    return (
        <div className="container">
        <div className="notification">

        <div className="columns is-mobile is-centered">
            <div className="column is-half has-text-centered">
            <figure className="image is-128x128 is-inline-block">
            <img className="is-rounded" src={Image} alt="Avatar of George Flores"/>
        </figure>
            </div>
        </div>
        
        
     

        <p className="content is-medium">
            Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
            malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
            ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
            nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
            Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
            porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
        </div>
           
        </div>

    );
}

export default About;
