import React from "react";
import './Qualifications.css';

const Qualifications = () => {
    return (
        <section className='qualification section'>
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My Coding Journey</span>

            <div className='qualification__container container'>


                {/*Tabs*/}
                <div className='qualification__tabs'>
                    <div className='qualification__button button--flex'>
                        <i className='uil uil-graduation-cap qualification__icon'></i>
                        Education
                    </div>

                    <div className='qualification__button button--flex'>
                        <i className='uil uil-briefcase-alt qualification__icon'></i>
                        Experience
                    </div>
                </div>

                {/*Section*/}
                <div className='qualification__sections'>
                    <div className='qualification__content qualification__content-active'>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Junior Frontend Developer (Freelance)</h3>
                                <span className='qualification__subtitle'>Hex.Studio</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i>
                                    2021-Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                        </div>



                        <div className='qualification__data'>

                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>Web Development Student</h3>
                                <span className='qualification__subtitle'>Humber College (Toronto, ON)</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'></i>
                                    2021-2022
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Qualifications;