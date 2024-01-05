import { useEffect, useState } from 'react';

import './App.scss';
import './setting.scss'

import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

import Main from './Component/Pages/Main.jsx'
import Portfolio from './Component/Pages/Portfolio/Portfolio.jsx';


import img_1 from "./Img/SItes/1.png";
import img_2 from "./Img/SItes/2.png";
import img_3 from "./Img/SItes/3.png";
import img_4 from "./Img/SItes/4.jpg";
import img_5 from "./Img/SItes/5-раз.jpg";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const [data, setData] = useState([
    { id: 1, img: img_1, name: 'Магия утра', tag: 'html css slick javascript', text: 'Сделать лэндинг для продаж образовантельных книг одного автора и его изданиями', class: "project-portfolio", code: 'https://github.com/Pavel253/1-webSite', site: 'https://pavel253.github.io/1-webSite/' },
    { id: 2, img: img_2, name: 'Game studio', tag: 'html css swiper javascript БЭМ slick', text: 'Сделать собственный сайт с достижениями разработчиками прославившим своими играми как Rise of Kingdoms и вакансии для новых разработчиков игр', class: "project-portfolio", code: 'https://github.com/Pavel253/2-webSite', site: 'https://pavel253.github.io/2-webSite/' },
    { id: 3, img: img_3, name: 'HEALTCARE', tag: 'html scss swiper javascript БЭМ gulp', text: 'Сделать Лендинг для вызовов через сайт и оказывание помощи не здоровым людям', class: "project-portfolio", code: 'https://github.com/Pavel253/3-webSite', site: 'https://pavel253.github.io/3-webSite/' },
    { id: 4, img: img_4, name: 'Segway California', tag: 'html scss swiper javascript БЭМ swiper', text: 'Сделать Лендинг для покупки и аренд самокатов и защитные вещи в Калифорнии', class: "project-portfolio", code: 'https://github.com/Pavel253/CodeProjectFour', site: 'https://pavel253.github.io/projectWebSite4/' },
    { id: 5, img: img_5, name: 'Nike', tag: 'html scss react redux javascript rest-api python django sqlite', class: "project-development", code: 'https://github.com/Pavel253/CodeProjectFour', site: 'https://pavel253.github.io/projectWebSite4/' },
  ]);

  const [scrollLock, setScrollLock] = useState(false);

  useEffect(() => {
    if (scrollLock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [scrollLock]);

  return (
    <div className="App">
      <Router>
        <Header scrollLock={scrollLock} setScrollLock={setScrollLock} />

        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/portfolio' element={<Portfolio data={data} setData={setData} />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
