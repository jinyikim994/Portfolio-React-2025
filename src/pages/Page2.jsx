// 라이브러리 불러오기
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css";

const Page2 = () => {
    
    return (
        <div className="page2-container">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Page2;