import React from "react";
import logo from "../assets/logo.png";
import { HeaderPalette } from "../config/palette";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderPalette>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </HeaderPalette>
  );
};

export default Header;
