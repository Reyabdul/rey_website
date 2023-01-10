import React from "react";

const Info = () => {

    return(
        <div className='about__info grid'>



            <div className='about__box'>
                <i class='bx bx-briefcase-alt about__icon'></i>
                <h3 className='about__title'>
                    Experience
                </h3>
                <span className='about__subtitle'>
                    Hex.Studio (3 months)
                </span>
            </div>


            <div className='about__box'>
                <i className='uil uil-graduation-cap qualification__icon'></i>

                <h3 className='about__title'>Education</h3>

                <span className='about__subtitle'>Humber College: Web Development</span>
            </div>
        </div>
    )

}

export default Info;