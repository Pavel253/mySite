import React, { useState } from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { Link as LinkS } from 'react-scroll';

const Header = () => {

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <header className={active ? 'header active' : 'header'}>
      <div className="container">
        <Link style={{ userSelect: 'none' }} to='/'><Logo /></Link>
        <ul className="navigation">
          <LinkS
            to="section1"
            text="Section 1"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
          >
            <li>Меню</li>
          </LinkS>
          <LinkS
            to="section2"
            text="Section 2"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
          >
            <li>Навыки</li>
          </LinkS>
          <LinkS
            to="section3"
            text="Section 3"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
          >
            <li>Портфолио</li>
          </LinkS>
          <LinkS
            to="footer"
            text="footer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-400}
            duration={1500}
          >
            <li>Контакты</li>
          </LinkS>
        </ul>
        <div className={active ? 'burger__menu active' : 'burger__menu'} onClick={handleClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={active ? 'navigation__two active' : 'navigation__two'}>
          <li>Меню</li>
          <li>Навыки</li>
          <li>Портфолио</li>
          <li>Контакты</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
