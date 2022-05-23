import React from "react";
import '../styles/Workshop.css'
import Title from '../components/Title.js'
import WorkshopItem from "../components/WorkshopItem";


function Workshop() {
      return (
            <div className="workshop-container">
                  <div className="workshop-cover">
                        <div className="workshop-filter">
                        </div>
                        <div className="workshop-title-container">
                              <Title className="workshop-title" title="Próximos talleres" color="green" size="big" />
                        </div>
                  </div>
                  <WorkshopItem title={"Taller de fotografía básica"} date={"27/05/2023"} adress={"Cl. 30 # 26 - 117, Bucaramanga, Santander"} image={1}/>
                  <WorkshopItem title={"Taller escritura de guión"} date={"05/06/2023"} adress={"Cl. 30 # 26 - 117, Bucaramanga, Santander"} image={2}/>
                  <WorkshopItem title={"Taller de dirección de arte"} date={"17/06/2023"} adress={"Cl. 30 # 26 - 117, Bucaramanga, Santander"} image={3}/>
                  <WorkshopItem title={"Taller de teatro y expresión"} date={"25/07/2023"} adress={"Cl. 30 # 26 - 117, Bucaramanga, Santander"} image={4}/>
                  <WorkshopItem title={"Taller de ambientación"} date={"03/08/2023"} adress={"Cl. 30 # 26 - 117, Bucaramanga, Santander"} image={5}/>
            </div>
      )
}

export default Workshop;