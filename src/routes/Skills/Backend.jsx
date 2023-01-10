import React from "react";


const Backend = () => {

    return(
        <div className='skills__content'>
            <h3 className="skills__title">Backend Developer</h3>

            <div className='skills__box'>
                {/* First column */}
                <div className='skills__group'>
                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Node.js</h3>
                            <span className='skills__level'>Beginner</span>
                        </div>            
                    </div>

                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>PHP</h3>
                            <span className='skills__level'>Beginner</span>
                        </div>            
                    </div>

                </div>

                {/* Second Column*/}
                <div className='skills__group'>
                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Laravel</h3>
                            <span className='skills__level'>Beginner</span>
                        </div>            
                    </div>

                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>SQL</h3>
                            <span className='skills__level'>Beginner</span>
                        </div>            
                    </div>

                    <div className='skills__data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>MySQL</h3>
                            <span className='skills__level'>Beginner</span>
                        </div>            
                    </div>

                </div>
                
            </div>
        </div>
    )

}

export default Backend;