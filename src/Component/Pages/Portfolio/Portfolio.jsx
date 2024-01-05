import React from 'react';

import Card from '../../Card/Card';

import './Portfolio.scss';
import '../../Adaptive/adaptive__portfolio.scss';

import { Link } from 'react-router-dom';

const Portfolio = ({ data, setData }) => {

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
    <main className='portfolio'>
      <section>
        <div className="container">
          <Link to='/'>
            <button className="btn">
              Обратно
            </button>
          </Link>
          <div className="container__card">
            {data.map((item) => (
              <Card handleClick={handleClick} data={item} setData={setData} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;