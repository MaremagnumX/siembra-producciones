import React from "react";
import '../styles/Title.css';

function Title({title, color, size}) {
      return(
            <div className={color==='green' ? 'title-container' : ''}>
                  <h1 className={(color==='green' ? (size==='big' ? 'green-title-big' : 'green-title') : 'purple-title')}>{title}</h1>
            </div>
      )
      
}

export default Title;