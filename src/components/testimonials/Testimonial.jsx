import React from "react";
import "./testimonial.css";
import gojo from "../../assets/gojo.jfif";
import kill from "../../assets/killua.jfif";
import aya from "../../assets/aya.jfif";
import luffy from "../../assets/Luffy.jfif";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    img: gojo,
    name: "Gojo Saturo",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    img: kill,
    name: "Killua Zoldyck",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    img: aya,
    name: "Ayanokoji Kiyotaka",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    img: luffy,
    name: "Monkey D. Luffy",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, img, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={img} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
