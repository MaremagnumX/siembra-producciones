import React from "react";
import Title from "./Title";
import '../styles/WorkshopItem.css';

function WorkshopItem({title, date, adress, image}) {
      return (
            <div className="workshopitem-container">
                  <div className= {image === 1 ? "workshopitem-cover-photo" : (image === 2 ? "workshopitem-cover-writing" : (image === 3 ? "workshopitem-cover-direction" : (image === 4 ? "workshopitem-cover-theater" : "workshopitem-cover-ambientation")) ) }>
                        
                        <div className="workshopitem-filter">
                        </div>
                        <div className="workshopitem-title-container">
                              <div className="workshopitem-title">
                                    <Title title={title}/>
                              </div>
                              <div className="workshopitem-info-container">
                                    <div className="workshopitem-center">
                                          <div className="workshopitem-date">
                                                <h2>{date}</h2>
                                          </div>
                                          <div className="workshopitem-adress">
                                                <p>{adress}</p>
                                          </div>
                                          <a className="workshopitem-button-container" href="/" target="_blank" rel="noopener noreferrer">
                                                <p className="workshopitem-button-text">Inscríbete</p>
                                          </a >
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default WorkshopItem;