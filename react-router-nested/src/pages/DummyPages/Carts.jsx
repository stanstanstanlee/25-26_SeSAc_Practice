import React from "react";
import CartsList from "../../components/CartsList";

export default function Carts() {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">장바구니 목록</h2>
      <CartsList />
    </div>
  );
}
