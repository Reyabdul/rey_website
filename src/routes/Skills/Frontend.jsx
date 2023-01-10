import React from "react";


const Frontend = () => {

    return(
        <div className='skills__content'>
            <h3 className="skills__title">Frontend Developer</h3>

            <div className='skills__box'>
                {/* First column */}
                <div className='skills__group'>

                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>HTML</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>            
                    </div>

                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>CSS/SCSS</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>            
                    </div>

                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>JavaScript</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>            
                    </div>

                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>RestAPI</h3>
                            <span className='skills__level'>Beginner</span>
                        </div>            
                    </div>

                </div>

                {/* Second Column*/}
                <div className='skills__group'>

                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>React.js</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>            
                    </div>

                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Matter.js</h3>
                            <span className='skills__level'>Beginner</span>
                        </div>            
                    </div>

                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Git/Github</h3>
                            <span className='skills__level'>Beginner</span>
                        </div>            
                    </div>

                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Responsive Design</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>            
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Frontend;