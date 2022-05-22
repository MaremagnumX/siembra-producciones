import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/VideoGallery.css";

import { Navigation, FreeMode } from "swiper";

import Video from '../components/Video.js';

function Gallery() {
      return (
            <div className="gallery-container">
                  <Swiper
                        slidesPerView={3}
                        spaceBetween={25}
                        freeMode={true}
                        modules={[FreeMode, Navigation]}
                        className="mySwiper"
                  >
                        <SwiperSlide><Video gallery={true} /></SwiperSlide>
                        <SwiperSlide><Video gallery={true} /></SwiperSlide>
                        <SwiperSlide><Video gallery={true} /></SwiperSlide>
                        <SwiperSlide><Video gallery={true} /></SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                  </Swiper>
            </div>
      )
}

export default Gallery;