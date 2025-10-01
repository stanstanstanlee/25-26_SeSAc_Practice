import React from "react";
import Recipe from "./Recipe";

export default function Recipe() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border">
      <img
        className="w-full h-48 object-cover rounded-lg mb-4"
        src="<https://via.placeholder.com/300x200>"
        alt="레시피 이미지"
      />
      <h3 className="text-lg font-bold text-gray-800 mb-2">레시피 이름</h3>
      <p className="text-gray-600 mb-2">요리 시간: 30분</p>
      <p className="text-gray-600 mb-2">난이도: Easy</p>
      <p className="text-gray-600">칼로리: 250kcal</p>
    </div>
  );
}
