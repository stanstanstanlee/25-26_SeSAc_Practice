import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CartsList() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    async function getCarts() {
      const { data } = await axios("https://dummyjson.com/carts");
      setCarts(data["carts"]);
    }
    getCarts();
  }, []);

  return (
    <div>
      <ul>
        {carts.map((cart) => (
          <li key={cart.id}>
            <strong>장바구니 ID: {cart.id}</strong>
            <br />
            사용자 ID: {cart.userId}
            <br />총 상품 수: {cart.totalProducts}
            <br />총 수량: {cart.totalQuantity}
            <br />총 가격: ${cart.total}
          </li>
        ))}
      </ul>
    </div>
  );
}
