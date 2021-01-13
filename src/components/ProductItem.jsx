import React from "react";
import { numberToCurrency } from "@/utils/currencyFormater";
import { Link } from "react-router-dom";
import freeShippingIcon from "@/assets/static/free_shipping.png";
import "@/assets/styles/components/ProductItem.scss";

const ProductItem = (props) => {
  const { id, title, picture, price, freeShipping, location } = props;

  return (
    <section className="ProductItem">
      <Link to={`/items/${id}`}>
        <picture className="ProductItem__picture">
          <img src={picture} alt={title} />
        </picture>
        <section className="ProductItem__body">
          <section className="ProductItem__body__itemDetails">
            <section className="ProductItem__body__itemDetails__price">
              <p>{price ? numberToCurrency(price.amount) : ""}</p>
              {freeShipping && (
                <img
                  className="freeShippingIcon"
                  src={freeShippingIcon}
                  alt="free shipping icon"
                />
              )}
            </section>
            <section className="ProductItem__body__title">
              <p>{title}</p>
            </section>
          </section>
          <section className="ProductItem__body__city">
            <p>{location}</p>
          </section>
        </section>
      </Link>
    </section>
  );
};

export default ProductItem;
