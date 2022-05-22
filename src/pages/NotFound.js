import React from "react";
import '../styles/NotFound.css'
import { ReactComponent as Img } from '../assets/notfound.svg';

function NotFound() {
      return (
                  <div className="notfound-container">
                        <Img className="notfound" />
                  </div>
      )
}

export default NotFound;