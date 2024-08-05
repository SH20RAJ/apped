"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Img from '@/lib/Img';

export default function AppCrousel({apps}) {

  let images;
  if (images) {
    images = images
  } else {
    images = [
      "https://sm.ign.com/t/ign_in/screenshot/default/bgmi-kalki_1xcp.1200.jpg",
      "https://i.ytimg.com/vi/ViRM0OIJIPQ/maxresdefault.jpg",
      "https://i.ytimg.com/vi/0cXihLp1aIQ/maxresdefault.jpg",
      "https://i.ytimg.com/vi/kL62WKmrZOs/maxresdefault.jpg",
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/YouTube_policy_hero.png",
      "https://static.toiimg.com/thumb/msid-110025863,width-1280,height-720,resizemode-4/110025863.jpg"
    ]
  }

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper  h-[500px] md:h-[600px] lg:h-[700px]"
      >

        {
          images.map((img, index) => (
            <SwiperSlide key={index}>
              <Img mode='cloudinary' src={img} className="object-cover w-full h-full" />
            </SwiperSlide>
          ))
        }

      </Swiper>

    </>
  );
}
