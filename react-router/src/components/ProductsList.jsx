import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const { data } = await axios("https://dummyjson.com/products");
      setProducts(data["products"]);
    }
    getProducts();
  }, []);
  return (
    <div>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
