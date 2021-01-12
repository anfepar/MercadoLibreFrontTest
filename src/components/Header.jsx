import React from "react";
import logo from "@/assets/static/mercado-libre.png";
import STRINGS from "@/constants/strings";
import SearchBar from "@/components/SearchBar";

const Header = () => (
  <header>
    <img src={logo} alt={STRINGS.HEADER.LOGO_ALT} />
    <SearchBar />
  </header>
);
export default Header;
