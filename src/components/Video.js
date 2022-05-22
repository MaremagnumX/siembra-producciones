import React from "react";
import '../styles/Video.css';
import ReactPlayer from "react-player";

function Video({ gallery }) {
      return (
            <div className="video-container">
                  <ReactPlayer

                        url={require('../assets/portada.mp4')}
                        width={gallery ? '100%' : '70%'}
                        height='auto'
                        controls
                  />
            </div>

      )
}

export default Video;