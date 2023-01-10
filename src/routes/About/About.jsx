import React from "react";
import './About.css';
import WebImg from '../../assets/ReyAbdul_photo.jpg';
import Resume from '../../assets/ReyAbdul_Resume.pdf';
import Info from "./Info";


const About = () => {

    return(
        <section className='about section' id='about'>
            <h2 className='section__title'>About Me</h2>
            <span className='section__subtitle'> My Introduction</span>

            <div className='about__container container grid'>
                <img src={WebImg} alt='' className='about__img' />

                <div className='about__data' >
                    <Info />

                    <p className='about__description'>
                        I studied Web Development at Humber College, where I learned various front-end and back-end languages. I am currently working as a freelance Junior frontend developer for a <a id="hex__link" href='https://www.hexstudio.io/'>Hex.Studio</a>.
                    </p>
                    <p className='about__description'>During my free time, I am always doing something relevant to my passion for learning, problem-solving and creating. This includes film photography, video games, trying new things(e.g. food), going on adventures, and learning something new such as languages(both coding and literal).</p>
                    <a download="" href={Resume} className='button button--flex' id="resume__button">
                        Download Resume <i class='bx bxs-file-pdf'></i>
                    </a>
                </div>
            </div>
        </section>
    )

}

export default About;