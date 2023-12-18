import React from "react";

import './Logo.scss'

import logo from '../../Img/svg/Untitled_logo_1_free-file 1.svg'

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="" />
      <div className="logo__span">
        <span className="span">Pavel</span>
        <span>Tsvetkov</span>
      </div>
    </div>
  );
};

export default Logo;
