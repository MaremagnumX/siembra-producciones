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
                  <WorkshopItem/>
            </div>
      )
}

export default Workshop;