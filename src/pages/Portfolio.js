import React from "react";
import Title from '../components/Title.js'
import VideoGallery from '../components/VideoGallery.js';
import ImageGallery from '../components/ImageGallery.js';

function Portfolio () {
      return (
            <div className="portfolio-container">
                  <Title title='Ficción'/>
                  <VideoGallery/>
                  <Title title='Documental'/>
                  <VideoGallery/>
                  <Title title='Fotografía corporativa'/>
                  <ImageGallery/>
            </div>
      )
}

export default Portfolio;