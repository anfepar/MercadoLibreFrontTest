import React from "react";
import Header from "@/components/Header";
import SearchCategories from "@/components/SearchCategories";
import ProductItem from "@/components/Product";
const Items = () => {
  const categories = [
    "Electronica, audio y video",
    "iPhod",
    "Reproductores",
    "iPod touch",
    "32 GB",
  ];

  const items = ["iPhod", "iPhone"];
  return (
    <div>
      <Header />
      <SearchCategories categories={categories} />
      {items.map((item) => (
        <ProductItem key={item} id={item} />
      ))}
    </div>
  );
};

export default Items;
