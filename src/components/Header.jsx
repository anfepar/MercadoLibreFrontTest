import React from "react";
import logo from "@/assets/static/mercado-libre.png";
import STRINGS from "@/constants/strings";
import SearchBar from "@/components/SearchBar";
import "@/assets/styles/components/Header.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <Link to="/">
      <img src={logo} alt={STRINGS.HEADER.LOGO_ALT} />
    </Link>
    <SearchBar />
  </header>
);
export default Header;
