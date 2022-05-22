import React from "react";
import Image from '../components/Image.js';

function PresentationCard() {
      return (
            <div className="info-container">
                  <div className="photo-conatiner">
                        <h1>Foto</h1>
                  </div>
                  <div className="name-conatiner">
                        <h1>Name</h1>
                  </div>
                  <div className="charge-conatiner">
                        <p>Charge</p>
                  </div>
            </div>
      )
}

export default PresentationCard;