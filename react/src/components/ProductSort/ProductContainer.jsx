import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
export default function ProductContainer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const { data } = await axios("https://dummyjson.com/products");
      setProducts(data["products"]);
    }
    getProducts();
  });
  return (
    <div className="max-w-12xl mx-auto p-6">
      <button></button>
      <button></button>
      <h2 className="text-3xl font-bold text-center mb-8"></h2>
      <div className="flex flex-col gap-6">
        {products.map((product) => {
          return <Product key={product["id"]} product={product}></Product>;
        })}
      </div>
    </div>
  );
}
