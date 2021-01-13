import React, { useState } from "react";
import STRINGS from "@/constants/strings";
import { useHistory } from "react-router-dom";
import "@/assets/styles/components/SearchBar.scss";
import searchIcon from "@/assets/static/search.png";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  let history = useHistory();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    const urlFormatQuery = encodeURIComponent(query);
    history.push(`/items?search=${urlFormatQuery}`);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <section className="searchBar">
      <input
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        type="text"
        className="input"
        placeholder={STRINGS.SEARCH_BAR.INPUT_PLACEHOLDER}
      />
      <button onClick={handleSearch}>
        <img src={searchIcon} alt="search button" />
      </button>
    </section>
  );
};

export default SearchBar;
