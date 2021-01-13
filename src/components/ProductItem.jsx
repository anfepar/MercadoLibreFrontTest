import React from "react";
import { numberToCurrency } from "@/utils/currencyFormater";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const { id, title, picture, price, freeShipping } = props;

  return (
    <Link to={`/items/${id}`}>
      <img src={picture} alt={title} />
      <h1>{title}</h1>
      <h3>{freeShipping}</h3>
      <h1>{price ? numberToCurrency(price.amount) : ""}</h1>
    </Link>
  );
};

export default ProductItem;
