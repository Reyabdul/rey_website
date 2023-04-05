import React from "react";
import './BackToTop.css';

const BackToTop = () => {

    window.addEventListener('scroll', function() {
        const scrollUp = document.querySelector(".scrollup");
        //when scroll is higher than 560 viewport height, scroll button (show-scroll) will show
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
      else scrollUp.classList.remove("show-scroll");        
    })

    return(
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )

}

export default BackToTop;