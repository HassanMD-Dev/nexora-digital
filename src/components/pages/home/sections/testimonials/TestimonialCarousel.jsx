import React from "react";
import testimonialData from "../../../../../data/testimonialData";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
const TestimonialCarousel = () => {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={1}
      loop={true}
      modules={[ Autoplay ]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {testimonialData.map((testimonial) => (
        <SwiperSlide className="h-auto py-2 px-3" key={testimonial.id}>
          <TestimonialCard testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCarousel;
