import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      {/* <ul>
        {products.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul> */}

      {products.map((product) => (
        <Link
          to={`/dummy/products/${product.id}`}
          className="block border p-2 mb-2 rounded hover:bg-gray-100"
        >
          <div>id : {product.id}</div>
          <div>Title : {product.title}</div>
          <div>Price : ${product.price}</div>
        </Link>
      ))}
    </div>
  );
}
