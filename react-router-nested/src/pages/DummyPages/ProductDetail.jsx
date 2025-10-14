import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getProduct() {
      const { data } = await axios(
        `https://dummyjson.com/products/${productId}`
      );
      setProduct(data);
    }
    getProduct;
  }, [productId]);
  return (
    <div>
      <div>상품 id: {product.id}</div>
    </div>
  );
}
