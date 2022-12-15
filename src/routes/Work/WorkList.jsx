import React from "react";
import xylkScreenshot from "../../assets/xylk_screenshot.png";
import Work from "./Work";

const WorkList = () => {

    //initialize objects
    const workDetails = [
        {
            "id": 1,
            "title": "Xylk's Website",
            "work summary": "Assisted with building n e-commerce website for Xylk",
            "created" : "Dec 2022",
            "description1": "THE MOURNING FOREST, 2007, NOAMI KAWASE",
            "description2": "THE MOURNING FOREST, 2007, NOAMI KAWASE",
            "description3": "THE MOURNING FOREST, 2007, NOAMI KAWASE",
            "image": {xylkScreenshot}, 
            "github": "https://github.com/Reyabdul/xylk_website_final",
            "url": "https://xylk.co/",
        }
    ]

    workDetails();
    console.log(workDetails)
    return (        
        <div >
            <Work workDetails={workDetails} />
        </div>
    )
}

export default WorkList;