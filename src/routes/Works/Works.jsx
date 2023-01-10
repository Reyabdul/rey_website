//https://stackoverflow.com/questions/41064718/how-to-create-an-new-instance-of-an-object-in-react
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Works.css';
import xylkScreenshot from "../../assets/xylk_screenshot.png";
import uaScreenshot from "../../assets/ua_screenshot.png";




//initialize objects



const Works = () => {

    const workDetails = [
        {
            "id": 2,
            "title": "Urban Apothecary Website",
            "technologies": {
              "tech1": "Wordpress",
              "tech2": "CSS",
              "tech3": "Responsive Design", 
            },
            "work summary": "Urban Apothecary's e-commerce website that utilizes Wordpress.",
            "created": "(In Process)",
            "description": {
                "desc1": "Ensured the responsiveness on various device (e.g: desktop, tablet, mobile).",
                "desc2": "Refactored code for better readability.",
            },
            "image": uaScreenshot ,
            "url": "https://urbanapothecary.ca/"
        },
        {
            "id": 1,
            "title": "Xylk's Website",
            "technologies": {
              "tech1": "React",
              "tech2": "Shopify API",
              "tech3": "Matter.js", 
            },
            "work summary": "An e-commerce website for the designer Xylk that utilizes Shopify API to create a fully customized website.",
            "created": "Dec 2022",
            "description": {
                "desc1": "Assisted with the recoding of whole website from Vanilla Javascript to React.js.",
                "desc2": "Utilized Shopify API to pull product data to populate website.",
                "desc3": "Integrated Matter.js to give product movement throughout webpage.",
                "desc4": "Helped improve overall lighthouse score by cleaning up code and utilizing DRY principles,",
            },
            "image": xylkScreenshot,
            "github": "https://github.com/Reyabdul/xylk_website_final",
            "url": "https://xylk.co/"
        },
    ];

    /*
    const workOne = WorkList(1, 
        "Xylk's webpage",
        "An e-commerce website for Xylk",
        "Dec 2022",
        "React.js",
        "shopify",
        "matter.js",
        {xylkScreenshot},
        "https://github.com/Reyabdul/xylk_website_final",
        "https://xylk.co/",
        )

    console.log(workOne);
    */

    /*
    let detailObj;

    const renderData = (workDetails) => {
        console.log(workDetails)
            detailObj = {
            "id": workDetails.id,
            "header": workDetails.header,
            "country": workDetails.country,
            "content": workDetails.content,
            "image": workDetails.image,
        }
    
        return (
            <div>
                {detailObj["id"]}
            </div>
        )
    }
    */

    //console.log(detailObj);

    //open the store url
    const openGithub = (e) => {
        window.location.href = e.target.dataset.url;
    }


    return (
        <section className='works section' id='works'>
            <h2 className='section__title'>Work</h2>
            <span className='section__subtitle'> Most Recent </span>
            


                {workDetails.map((w)=>{
                    return(
                        <div className='works__container container grid' key={w.id}>
                            <img src={w.image} alt='' className='works__img' />
                            
                            <div className='works__details'>
                                <h3 className='works__title'>{w.title}</h3>
                                    
                                    {Object.values(w.technologies).map((tech, i) => {
                                        return(
                                            <div className='tech__container'>
                                                <p className="tech works__subtitle">{tech} </p>
                                            </div>
                                        )
                                    })}

                                    
                                    <p>{w.created}</p>
                                    <p>{w['work summary']}</p>
                                    {Object.values(w.description).map((desc, i) => {
                                        return(
                                            <ul className='desc__list' key={i}>
                                                <li >
                                                    <p>{desc}</p>
                                                </li>
                                            </ul>
                                        )
                                    })}

                                <div className='link__containers container grid'>
                                    <button 
                                        className='link-buttons button button--flex'
                                        data-url={w.github}
                                        onClick={(e) => openGithub(e)}
                                    >
                                        {w.github? "github" : "no github"}
                                    </button>

                                    <button 
                                        className='link-buttons button button--flex'
                                        data-url={w.url}
                                        onClick={(e) => openGithub(e)}
                                    >
                                        Website
                                    </button>
                                </div>

                            </div>
                        </div>
                    )
                })
                }

        </section>


    )
};

export default Works;