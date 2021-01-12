import React from "react";

const SearchCategories = (props) => {
  const { categories } = props;
  return (
    <div>
      {categories.map((category, index) => (
        <p key={category}>{`${index ? "/" : ""}${category}`}</p>
      ))}
    </div>
  );
};

export default SearchCategories;
