import React from 'react';
import AboutImage from '../../docs/ola.png'

function About() {

    return(
        <section className="container">
            <h2 class="top-title">Olamide Bello</h2>
            <hr></hr>
            <div>
                <img class="mb-5" id="avatar" src={AboutImage} alt="Olamide Bello" />

                <p>
                I'm an early career software engineer with a background in Computer Science. I'm eager to blend my systems support experience with my web development skills to enhance user inter-interactivity. 
                I am all about creativity, collaboration, and learning new things.
                </p>
                <p>
                I have developed skills with experience using the MERN framework to provide cost-effective, 
                secure and user-friendly solutions known for scalability and durability. 
                I bring to the table Knowledge of commercial ERP's and open source content management development 
                software/database engineering tools.
                </p>
                <p>
                Building skills to provide solutions for business improvement.
                </p>
            </div>
            
        </section>
    )
}

export default About;