import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "./Works.scss";
import Card from "../Card/Card";


const Works = ({ setData, data }) => {

  return (
    <section className="works" id="section3" >
      <div className="container">
        <div className="container__items">
          <h2 className="title__h2">Портфолио</h2>
          <Link to='/portfolio' className="btn__link-work">Посмотреть</Link>
        </div>
        <div className="container__portfolio">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              1600: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 3,
              },
              1151: {
                slidesPerView: 2,
              },
              769: {
                slidesPerView: 2,
              },
              569: {
                slidesPerView: 2,
              },
              568: {
                slidesPerView: 1,
              },
              360: {
                slidesPerView: 1,
              },
            }}
          >
            {data.map((item) => (
              <SwiperSlide>
                <Card data={item} setData={setData} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Works;
