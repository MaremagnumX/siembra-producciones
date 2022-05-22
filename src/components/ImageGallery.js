import React from "react";
import Image from './Image.js'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/ImageGallery.css";

import { Navigation, FreeMode } from "swiper";

import Video from './Video.js';

function ImageGallery() {
      return (
            <div className="gallery-container">
                  <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        modules={[FreeMode, Navigation]}
                        className="mySwiper"
                  >
                        <SwiperSlide><Image /></SwiperSlide>
                        <SwiperSlide><Image /></SwiperSlide>
                        <SwiperSlide><Image /></SwiperSlide>
                        <SwiperSlide><Image /></SwiperSlide>
                        <SwiperSlide><Image /></SwiperSlide>
                  </Swiper>
            </div>
      )
}

export default ImageGallery;