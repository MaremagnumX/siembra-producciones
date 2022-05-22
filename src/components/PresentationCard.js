import React from "react";
import Image from '../components/Image.js';
import '../styles/About.css'

function PresentationCard({name}) {
      return (
            <div className="info-container">
                  <div className={name === "v" ? "valeria-container" : (name === "k" ? "kevin-container" :  ( name === "n" ? "neider-container": (name === "t" ? "tupi-container" : "photo-container")))} >
                        
                  </div>
                  <div className="name-container">
                        <h1>{name === "v" ? "Valeria Argüello" : (name === "k" ? "Kevin Villamizar" :  ( name === "n" ? "Neider Mendoza": (name === "t" ? "Sebastian Estupiñan" : "name-container")))}</h1>
                  </div>
                  <div className="charge-container">
                        <p>{name === "v" ? "Directora de arte" : (name === "k" ? "Ingeniero de sistemas" :  ( name === "n" ? "Gaffer": (name === "t" ? "Sonidista" : "name-container")))}</p>
                  </div>
            </div>
      )
}

export default PresentationCard;