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
  }, []);

  function handleSort(key, order) {
    const sorted = [...products].sort((a, b) => {
      if (order === "asc") {
        return a[key] - b[key];
      } else {
        return b[key] - a[key];
      }
    });
    setProducts(sorted);
  }
  return (
    <div className="max-w-12xl mx-auto p-6">
      <button
        onClick={() => {
          handleSort("id", "asc");
        }}
        className="px-4 py-2 mr-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition-colors"
      >
        ID ↑
      </button>
      <button
        onClick={() => {
          handleSort("id", "desc");
        }}
        className="px-4 py-2 mr-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition-colors"
      >
        ID ↓
      </button>
      <button
        onClick={() => {
          handleSort("price", "asc");
        }}
        className="px-4 py-2 mr-2 bg-green-400 text-white rounded hover:bg-green-600 transition-colors"
      >
        가격 ↑
      </button>
      <button
        onClick={() => {
          handleSort("price", "desc");
        }}
        className="px-4 py-2 mr-2 bg-green-400 text-white rounded hover:bg-green-600 transition-colors"
      >
        가격 ↓
      </button>
      <button
        onClick={() => {
          handleSort("rating", "asc");
        }}
        className="px-4 py-2 mr-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition-colors"
      >
        평점 ↑
      </button>
      <button
        onClick={() => {
          handleSort("rating", "desc");
        }}
        className="px-4 py-2 mr-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition-colors"
      >
        평점 ↓
      </button>
      <h2 className="text-3xl font-bold text-center mb-8"></h2>
      <div className="flex flex-col gap-6">
        {products.map((product) => {
          return <Product key={product["id"]} product={product}></Product>;
        })}
      </div>
    </div>
  );
}
