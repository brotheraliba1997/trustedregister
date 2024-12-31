"use client"
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay, EffectCards } from 'swiper/modules';


function Slider() {
      

  return (
    <>
        <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[Autoplay,EffectCards]}
        className="mySwiper"
        autoplay={{
            delay: 1000, // Delay in milliseconds
            disableOnInteraction: false,
          }}
      >

        <SwiperSlide>
            <div className="h-[200px] w-[400px] bg-black">
ssss
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="h-[200px] w-[400px] bg-emerald-500">
ssss
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="h-[200px] w-[400px] bg-fuchsia-600">
ssss
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="h-[200px] w-[400px] bg-violet-800">
ssss
            </div>
        </SwiperSlide>
        
      </Swiper>
    </>
    </>
  );
}

export default Slider;
