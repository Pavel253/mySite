import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "./Works.scss";
import Card from "../Card/Card";

import img_1 from "../../Img/SItes/1.png";
import img_2 from "../../Img/SItes/2.png";
import img_3 from "../../Img/SItes/3.png";
import img_4 from "../../Img/SItes/4.jpg";

const Works = () => {
  const [data, setData] = useState([
    { id: 3, img: img_4, class: "project", code: 'https://github.com/Pavel253/CodeProjectFour', site: 'https://pavel253.github.io/projectWebSite4/' },
    { id: 1, img: img_2, class: "project", code: 'https://github.com/Pavel253/2-webSite', site: 'https://pavel253.github.io/2-webSite/' },
    { id: 2, img: img_3, class: "project", code: 'https://github.com/Pavel253/3-webSite', site: 'https://pavel253.github.io/3-webSite/' },
    { id: 4, img: img_1, class: "project", code: 'https://github.com/Pavel253/1-webSite', site: 'https://pavel253.github.io/1-webSite/' },

  ]);

  const handleClick = (itemId) => {
    setData((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, className: item.className ? "" : "active" };
        }
        return item;
      });
    });
  };

  return (
    <section className="works">
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
                <Card handleClick={handleClick} data={item} setData={setData} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Works;
