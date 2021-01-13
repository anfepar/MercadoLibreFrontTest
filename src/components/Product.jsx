import React from "react";
import { numberToCurrency } from "@/utils/currencyFormater";
import "@/assets/styles/components/Product.scss";
import STRINGS from "@/constants/strings";

const Product = (props) => {
  const { condition, soldQuantity, title, picture, price, description } = props;
  return (
    <section className="Product">
      <section className="Product__details">
        <picture className="Product__details__picture">
          <img src={picture} alt={title} />
        </picture>

        <article className="Product__details__info">
          <p className="Product__details__info__state">
            {`${
              condition === "new"
                ? STRINGS.PRODUCT.CONDITION_NEW
                : STRINGS.PRODUCT.CONDITION_USED
            } - ${soldQuantity} ${STRINGS.PRODUCT.SOLD}`}
          </p>
          <p className="Product__details__info__title">{title}</p>
          <p className="Product__details__info__price">
            {price ? numberToCurrency(price.amount) : ""}
          </p>
          <button className="Product__details__info__button">
            {STRINGS.PRODUCT.BUY}
          </button>
        </article>
      </section>
      <article className="Product__description">
        <p className="Product__description__title">
          {STRINGS.PRODUCT.DESCRIPTION_TITLE}
        </p>
        <p className="Product__description__text">{description}</p>
      </article>
    </section>
  );
};

export default Product;
