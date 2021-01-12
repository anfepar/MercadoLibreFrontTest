import React from "react";
import { numberToCurrency } from "@/utils/currencyFormater";
const ProductItem = (props) => {
  const { title, picture, price, freeShipping } = props;
  return (
    <section>
      <img src={picture} alt={title} />
      <h1>{title}</h1>
      <h3>{freeShipping}</h3>
      <h1>{price ? numberToCurrency(price.amount) : ""}</h1>
    </section>
  );
};

export default ProductItem;
