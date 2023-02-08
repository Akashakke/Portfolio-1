import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";


const Testimonial = () => {
  const clients = [
    {
      title:'E-commerce Applicaton',
      img: 'https://cdn.iconscout.com/icon/free/png-256/ecommerce-services-solution-cart-online-shopping-settings-6977.png',
      review:
        "Using MERN Stack",
        link:'https://digi-world.netlify.app/'
    },
    {
      title:'Social Media Management Application',
      img: 'https://png.pngtree.com/element_our/md/20180524/md_5b072d393d61e.jpg',
      review:
        "Using MERN Stack",
        link:'https://connect-ezru.onrender.com'
    },
    {
      title:'CRUD Operations',
      img: 'https://media.glassdoor.com/sqll/4991319/crud-operations-squareLogo-1629959382545.png',
      review:
        "Simple application built using React",
        link:'https://crud-nly9.onrender.com'
    },
    {
      title:'Fetch API',
      img: 'https://miro.medium.com/max/1200/1*pD_a4MRxL5KqQi-DC_R0IQ.png',
      review:
        "Fetch API using Javascript in fetching Rest-countries api",
        link:'https://charming-salmiakki-123884.netlify.app/'
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>These are the </span>
        <span>Working Code </span>
        <span>of my projects..</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <h4>{client.title}</h4>
                <span>{client.review}</span>
                <a href={client.link} target='_blank'><button className="button">View</button></a>
                
                
              </div>
              
            </SwiperSlide>
            
          );
        })}
      </Swiper>
      
    </div>
  );
};

export default Testimonial;
