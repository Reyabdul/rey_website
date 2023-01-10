//reference: https://www.webtips.dev/toggle-buttons-in-react

import React, { useState } from 'react';
import './ToggleButton.css'

const ToggleButton = ({ label, toggled, onClick }) => {

    const[isToggled, setToggle] = useState(toggled);

    const handleToggle = () => {
        setToggle(!isToggled)
        onClick(!isToggled)
    }

    return(
        <div className='toggle__button'>
            <label>
                <input type="checkbox" defaultChecked={isToggled} onClick={handleToggle} id='toggle__input' />
                <span id='toggle__span'/>
            </label>
        </div>
    )

};

export default ToggleButton;