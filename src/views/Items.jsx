import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import ProductItem from "@/components/ProductItem";
import { useLocation } from "react-router-dom";
import { fetchGet } from "@/utils/fetchApi";
const Items = () => {
  const location = useLocation();
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (location.search) {
      const query = location.search.split("search=")[1];
      fetchGet(`items?q=${query}`).then((apiItems) => {
        setItems(apiItems);
      });
    }
  }, [location, setItems]);
  return (
    <div>
      <Header />
      {items &&
        items.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            picture={item.picture}
            price={item.price}
            freeShipping={item.free_shipping}
          />
        ))}
    </div>
  );
};

export default Items;
