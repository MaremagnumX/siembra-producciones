import React from "react";
import ReactPlayer from "react-player";

function VideoCover() {
      return(
            <div className="video-container">
                  <ReactPlayer
                        
                        url={require('../assets/portada.mp4')}
                        width='100%'
                        height='auto'
                        playing='true'
                        loop='true'
                        muted='true'
                  />
            </div>
            
      )
}

export default VideoCover;