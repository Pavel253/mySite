import React from "react";

import '../../variable.scss'
import "./AboutMe.scss";

import img from '../../Img/фон.jpg'

import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="about__me" id="section1">
      <div className="container">
        <div className="about__me-text">
          <h1 className="title">Fullstack разработчик</h1>
          <p className="text">
            Привет! Я программист, рад знакомству! Меня зовут Павел. Я увлекаюсь
            программированием с 15 лет и постоянно развиваю свои навыки в этой
            области. Мои основные языки программирования - python, javascript. Я
            специализируюсь в создании сайта так frontend так и backend части
          </p>
          <Link to='/portfolio' className="btn__link-work">Посмотреть</Link>

        </div>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default AboutMe;
