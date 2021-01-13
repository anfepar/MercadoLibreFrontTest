import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Product from "@/components/Product";
import { useParams } from "react-router-dom";
import { fetchGet } from "@/utils/fetchApi";

const ItemInfo = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchGet(`items/${id}`).then((apiItem) => {
      setItem(apiItem);
    });
  }, [id, setItem]);
  return (
    <section>
      <Header />
      {item && (
        <Product
          condition={item.condition}
          soldQuantity={item.sold_quantity}
          title={item.title}
          picture={item.picture}
          price={item.price}
          description={item.description}
        />
      )}
    </section>
  );
};

export default ItemInfo;
