import React from "react";

import "./Card.scss";

const Card = ({ data, handleClick }) => {

  const onclickCode = () => {
    window.location.assign(`${data.code}`);
  }


  const onclickSite = () => {
    window.location.assign(`${data.site}`);
  }

  return (
    <div key={data.id} className={`card ${data.className}`} onClick={() => handleClick(data.id)}>
      <div className={data.class}>
        <img className="img" src={data.img} alt="" />
        <div className="modal">
          <div className="modal__content">
            <h6 className="title__h6">Посмотреть</h6>
            <button className="btn" onClick={onclickCode}>Код</button>
            <button className="btn" onClick={onclickSite}>Сайт</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
