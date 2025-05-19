"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css/bundle";
import "./carousel.css";
const Carousel = () => {
  return (
    <div className="container mx-auto h-96 flex flex-col justify-center items-center gap-10">
      <p className="text-white text-xl">Trusted by top innovative teams</p>
      <div className="container h-52">
        <Swiper
          freeMode={true}
          speed={10000}
          loop={true}
          modules={[Autoplay, FreeMode]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 0,
            },

            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          //   onSlideChange={() => console.log("slide change")}
          //   onSwiper={(swiper) => console.log(swiper)}
        >
          {Array(20)
            .fill("i")
            .map((_, idx) => {
              return (
                <SwiperSlide key={idx} className="w-[150px]">
                  <img
                    className="w-[150px] object-contain"
                    width={150}
                    src={
                      "https://images.www.talentlms.com/wp-content/uploads/2023/07/Google.png"
                    }
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
