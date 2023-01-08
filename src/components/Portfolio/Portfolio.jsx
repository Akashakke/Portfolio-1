import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          
          <img src='https://d3mxt5v3yxgcsr.cloudfront.net/courses/5116/course_5116_image.png' alt="" />
          
        </SwiperSlide>
        
        
        <SwiperSlide>
          <img src='https://i.ytimg.com/vi/VQCeu2mq8wE/maxresdefault.jpg' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTfsELSsfAIkLHH9eoQggVSiyuDOkkLtt-56VRgKgvrvvuB5BbAolVf2Bf9lfG7TgeA7Y&usqp=CAU' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='data:image/png;base64,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' alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
