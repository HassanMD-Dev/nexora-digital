import React from "react";
import testimonialData from "../../../../../data/testimonialData";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
const TestimonialCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        speed={800}
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".testimonial-next",
          prevEl: ".testimonial-prev",
        }}
        autoplay={{
          delay: 3500,
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
      <div className="mt-8 flex justify-center gap-4">
        <button className="testimonial-prev flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background shadow transition hover:bg-primary hover:text-white">
          <ChevronLeft size={20} />
        </button>

        <button className="testimonial-next flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background shadow transition hover:bg-primary hover:text-white">
          <ChevronRight size={20} />
        </button>
      </div>
    </>
  );
};

export default TestimonialCarousel;
