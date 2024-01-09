import React from 'react';

import Card from '../../Card/Card';

import './Portfolio.scss';
import '../../Adaptive/adaptive__portfolio.scss';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion'

const Portfolio = ({ data, setData }) => {

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='portfolio'>
      <section>
        <div className="container">
          <Link to='/'>
            <button className="btn">
              Обратно
            </button>
          </Link>
          <div className="container__card">
            {data.map((item) => (
              <Card data={item} setData={setData} />
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Portfolio;