import React from "react";

export default function Product({ product }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border h-48 flex flex-col">
      <h3 className="text-lg font-bold text-gray-800 mb-2">
        {product["title"]}
      </h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-4">
        <span className="text-gray-600">{`ID: ${product["id"]}`}</span>
        <span className="text-gray-600">{`가격: $${product["price"]}`}</span>
        <span className="text-gray-600">{`평점: ${product["rating"]}`}</span>
        <span className="text-gray-600">{`재고: ${product["stock"]}`}</span>
        <span className="text-gray-600">{`카테고리: ${product["category"]}`}</span>
        <span className="text-gray-600">{`브랜드: ${product["brand"]}`}</span>
      </div>
      <p className="text-gray-600 whitespace-nowrap">{`${product["description"]}`}</p>
    </div>
  );
}
