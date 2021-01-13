import React from "react";
import { numberToCurrency } from "@/utils/currencyFormater";

const Product = (props) => {
  const { condition, soldQuantity, title, picture, price, description } = props;
  return (
    <section>
      <img src={picture} alt={title} />
      <h1>{title}</h1>
      <h1>{price ? numberToCurrency(price.amount) : ""}</h1>
      <h3>{`${condition} - ${soldQuantity}`}</h3>
      <p>{description}</p>
    </section>
  );
};

export default Product;
