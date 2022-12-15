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
        <label>
            <input type="checkbox" defaultChecked={isToggled} onClick={handleToggle} />
            <span />
            <strong>{label}</strong>
        </label>
    )

};

export default ToggleButton;