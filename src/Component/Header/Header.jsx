import React from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <ul className="navigation">
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
