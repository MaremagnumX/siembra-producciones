import React from "react";
import '../styles/Image.css'
import durangar from '../assets/Durangar1.jpg'

function Image () {
      return(
            <div className="image-container">
                  <img src={durangar} alt="Durangar1"/>
            </div>
      )
}

export default Image;