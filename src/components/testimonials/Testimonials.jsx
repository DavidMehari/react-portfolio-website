import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi
            veritatis laudantium beatae ratione reprehenderit est vero eius nemo
            repellat deserunt ipsum quia dolores, ad tempora assumenda magnam
            sint suscipit.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi
            veritatis laudantium beatae ratione reprehenderit est vero eius nemo
            repellat deserunt ipsum quia dolores, ad tempora assumenda magnam
            sint suscipit.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi
            veritatis laudantium beatae ratione reprehenderit est vero eius nemo
            repellat deserunt ipsum quia dolores, ad tempora assumenda magnam
            sint suscipit.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi
            veritatis laudantium beatae ratione reprehenderit est vero eius nemo
            repellat deserunt ipsum quia dolores, ad tempora assumenda magnam
            sint suscipit.
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
