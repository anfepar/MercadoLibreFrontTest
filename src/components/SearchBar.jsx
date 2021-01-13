import React, { useState } from "react";
import STRINGS from "@/constants/strings";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  let history = useHistory();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    const urlFormatQuery = encodeURIComponent(query);
    history.push(`/items?search=${urlFormatQuery}`);
  };

  return (
    <section>
      <input
        onChange={handleInputChange}
        type="text"
        className="input"
        placeholder={STRINGS.SEARCH_BAR.INPUT_PLACEHOLDER}
      />
      <button onClick={handleSearch}>buscar</button>
    </section>
  );
};

export default SearchBar;
