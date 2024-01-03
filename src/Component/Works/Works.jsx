import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./Works.scss";
import Card from "../Card/Card";

import img_1 from "../../Img/SItes/1.png";
import img_2 from "../../Img/SItes/2.png";
import img_3 from "../../Img/SItes/3.png";
import img_4 from "../../Img/SItes/4.jpg";

const Works = () => {
  const [data, setData] = useState([
    { id: 1, img: img_1, class: "project", code: 'https://github.com/Pavel253/1-webSite', site: 'https://pavel253.github.io/1-webSite/' },
    { id: 2, img: img_2, class: "project", code: 'https://github.com/Pavel253/2-webSite', site: 'https://pavel253.github.io/2-webSite/' },
    { id: 3, img: img_3, class: "project", code: 'https://github.com/Pavel253/3-webSite', site: 'https://pavel253.github.io/3-webSite/' },
    { id: 4, img: img_4, class: "project", code: 'https://github.com/Pavel253/CodeProjectFour', site: 'https://pavel253.github.io/projectWebSite4/' },
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
        <h2 className="title__h2">мои работы</h2>
        <div className="container__portfolio">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
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
