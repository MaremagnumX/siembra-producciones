import React from "react";
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
                        <p>{name === "v" ? "Directora de arte" : (name === "k" ? "Ingeniero de sistemas" :  ( name === "n" ? "Gaffer/Montajista": (name === "t" ? "Sonidista" : "name-container")))}</p>
                  </div>
                  <div className="charge-description">
                        <p>{name === "v" ? "Maestra en artes audiovisuales, con experiencia realizando  el cargo de directora de arte, asistente de arte y producción" : (name === "k" ? "Ingeniero de sistemas con dos años de experiencia desarrollando páginas web y aplicaciones móviles haciendo uso del diseño UX" :  ( name === "n" ? "Maestro en artes audiovisuales con experiencia realizando los cargos de dirección de foto, gaffer y montajista": (name === "t" ? "Maestro en artes audiovisuales con experiencia realizando el cargo de sonidista, microfonista y sound mixer" : "name-container")))}</p>
                  </div>
            </div>
      )
}

export default PresentationCard;