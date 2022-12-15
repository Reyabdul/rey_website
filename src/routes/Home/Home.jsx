import React, { Component } from 'react';
import './Home.css';
import profilePic from "../../assets/ReyAbdul_photo.jpg";
import Work from "../Work/Work";



const Home = () => {



    return(

        <>
           <section className='home'>
                <img id="profile-pic" src={profilePic} />
                <div className='introduction'>
                    <h2>Hi! I'm rey. A freelance web developer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, provident expedita. Tenetur, modi voluptatem! Temporibus unde eos iure corrupti quaerat praesentium, reiciendis itaque non? Quo, non? Totam sapiente corporis iste?</p>
                </div>

            </section>

            <Work />

        </>

    )
};

export default Home;