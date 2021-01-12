import React from "react";
import STRINGS from "@/constants/strings";

const SearchBar = () => {
  return (
    <section>
      <input
        type="text"
        className="input"
        placeholder={STRINGS.SEARCH_BAR.INPUT_PLACEHOLDER}
      />
    </section>
  );
};

export default SearchBar;
