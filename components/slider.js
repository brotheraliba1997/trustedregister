"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";
import Slide1 from "@/app/assets/slide-1.png"
import Slide2 from "@/app/assets/slide-2.png"
import Slide3 from "@/app/assets/slide-3.png"

import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Slider() {
  return (
    <>
    <Swiper
      effect={'flip'}
      grabCursor={true}
      pagination={true}
     
      modules={[EffectFlip, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
      <Image src={Slide1} width={400} height={300} objectFit="contain" alt="Slide1" />

      </SwiperSlide>
      <SwiperSlide>
      <Image src={Slide2} />

      </SwiperSlide>
      <SwiperSlide>
      <Image src={Slide3} />

      </SwiperSlide>
    
  
     
    </Swiper>
  </>
  );
}

export default Slider;
