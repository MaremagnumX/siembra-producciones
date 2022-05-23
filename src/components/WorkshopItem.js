import React from "react";
import Title from "./Title";
import '../styles/WorkshopItem.css';

function WorkshopItem() {
      return (
            <div className="workshopitem-container">
                  <div className="workshopitem-cover">
                        <div className="workshopitem-filter">
                        </div>
                        <div className="workshopitem-title-container">
                              <div className="workshopitem-title">
                                    <Title title="Taller de fotografía básica" />
                              </div>
                              <div className="workshopitem-info-container">
                                    <div className="workshopitem-date"></div>
                                    <div className="workshopitem-adress "></div>
                                    <div className="workshopitem-button"></div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default WorkshopItem;