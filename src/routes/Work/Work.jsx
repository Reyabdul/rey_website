import React from 'react';
import './Work.css';

const Work = (workDetails) => {

    console.log(workDetails);

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

    return(
        <section className='work'>
            <h2>Recent Work</h2>
            <div>
            </div>
        </section>

        
    )
};

export default Work;