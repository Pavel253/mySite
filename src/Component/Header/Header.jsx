import React, { useState } from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Header = ({setScrollLock, scrollLock}) => {
 
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
    setScrollLock(!scrollLock)
  }

  return (
    <header className={active ? 'header active' : 'header'}>
      <div className="container">
        <Link to='/'><Logo /></Link>
        <ul className="navigation">
          <li>меню</li>
          <li>Портфолио</li>
          <li>Сервисы</li>
          <li>Контакты</li>
        </ul>
        <div className={active ? 'burger__menu active' : 'burger__menu'} onClick={handleClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={active ? 'navigation__two active' : 'navigation__two'}>
          <li>меню</li>
          <li>Портфолио</li>
          <li>Сервисы</li>
          <li>Контакты</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
