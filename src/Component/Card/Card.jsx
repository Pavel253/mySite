import React from "react";

import "./Card.scss";

const Card = ({ data, handleClick }) => {

  const onclickSite = () => {
    window.location.assign(`${data.site}`);
  }

  const str = `${data.tag}`;
  const words = str.split(" ");

  return (
    <div key={data.id} className={`card`} onClick={() => handleClick(data.id)}>
      <div className={data.class}>
        <img className="img" src={data.img} alt="" />
        <span className="development">В разработке</span>

        <div className="modal">
          <div className="modal__content">
            <h6 className="title__h6">Посмотреть</h6>
            <button className="btn" onClick={onclickSite}>Сайт</button>
          </div>
        </div>

        <div className="modal__portfolio">
          <div className="modal__main">
            <p className="text">{data.text}</p>
            <div className="tag__flex">
              {words.map((word, index) => (
                <span key={index}>{word}</span>
              ))}
            </div>
          </div>
          <div className="modal__btn">
            <span className="span__site">Сайт: {data.name}</span>
            <button className="btn" onClick={onclickSite}>
              Посмотреть
              <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM0 9H25V7H0V9Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
