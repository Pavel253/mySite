import React from 'react';

import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Works from '../Works/Works';

import '../Adaptive/adaptive__main.scss'


const Main = () => {
  return (
    <main>
      <AboutMe />
      <Skills />
      <Works />
    </main>
  );
};

export default Main;