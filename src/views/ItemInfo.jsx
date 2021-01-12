import React from "react";
import Header from "@/components/Header";
import Product from "@/components/Product";
import { useParams } from "react-router-dom";

const ItemInfo = () => {
  const { id } = useParams();
  return (
    <section>
      <Header />
      <Product id={id} />
    </section>
  );
};

export default ItemInfo;
