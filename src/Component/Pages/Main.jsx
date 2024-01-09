import React from 'react';
import '../Adaptive/adaptive__main.scss'

import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Works from '../Works/Works';


import { motion } from 'framer-motion'

const Main = ({ data, setData }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AboutMe />
      <Skills />
      <Works data={data} setData={setData} />
    </motion.main>
  );
};

export default Main;