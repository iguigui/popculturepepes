import React from "react";
import { Link } from "react-router-dom";

import MetamaskButton from "../atoms/MetamaskButton";
import logopepe from "../../img/logopepe.png";

const Header = () => {
  return (
    <div className="header ui secondary menu container">
      {/* <Link to="/" className="item logo">
        <img src={logopepe} alt="Logo Pop Cult Pepe" />
      </Link> */}
      <div className="right menu">
        <a
          className="item social"
          href="https://discord.gg/popcultpepe"
          target="_blank"
        >
          <i className="discord icon"></i>
        </a>
        <a
          className="item social"
          href="https://www.twitter.com/popcultpepe/"
          target="_blank"
        >
          <i className="twitter icon"></i>
        </a>

        <MetamaskButton />
      </div>
    </div>
  );
};

export default Header;
