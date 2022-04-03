import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    avatar: AVTR1,
    name: 'Ernest Achiever',
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi
    veritatis laudantium beatae ratione reprehenderit est vero eius nemo
    repellat deserunt ipsum quia dolores, ad tempora assumenda magnam
    sint suscipit.`,
  },
  {
    avatar: AVTR2,
    name: 'Ernest Achiever',
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi
    veritatis laudantium beatae ratione reprehenderit est vero eius nemo
    repellat deserunt ipsum quia dolores, ad tempora assumenda magnam
    sint suscipit.`,
  },
  {
    avatar: AVTR3,
    name: 'Ernest Achiever',
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi
    veritatis laudantium beatae ratione reprehenderit est vero eius nemo
    repellat deserunt ipsum quia dolores, ad tempora assumenda magnam
    sint suscipit.`,
  },
  {
    avatar: AVTR4,
    name: 'Ernest Achiever',
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi
    veritatis laudantium beatae ratione reprehenderit est vero eius nemo
    repellat deserunt ipsum quia dolores, ad tempora assumenda magnam
    sint suscipit.`,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}    
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, i) => (
          <SwiperSlide key={i} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="Avatar" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
