import React from "react";

const Product = (props) => {
  const { id } = props;
  const title = "Iphod";
  const image = "";
  const location = "BTA";
  const description = "lorem ipum";
  const price = "5000";
  return (
    <section>
      {id}
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h1>{price}</h1>
      <p>{description}</p>
      <h3>{location}</h3>
    </section>
  );
};

export default Product;