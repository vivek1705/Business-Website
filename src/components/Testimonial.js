// Testimonials.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from './Data/data';
import './Testimonial.css';

const Testimonial = () => {
  const { testimonials } = data;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: currentSlide,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <section className="testimonials" aria-label="Testimonials">

        <h2 className="testimonials-title">Client Testimonials</h2>
        <div className="testimonials-container">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <p className="testimonial-text">" {testimonial.text} "</p>
                <p className="testimonial-author">- {testimonial.author},{testimonial.company}</p>
              </div>
            ))}
          </Slider>
        </div>
      
    </section>
  );
};

export default Testimonial;
