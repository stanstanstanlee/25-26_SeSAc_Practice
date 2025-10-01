import React from "react";
import Recipe from "./Recipe";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RecipeContainer() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function getRecipe() {
      const { data } = await axios("https://dummyjson.com/recipes");
      setRecipes(data["recipes"]);
    }
    getRecipe();
  }, []);
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">레시피 목록</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {recipes.map((recipe) => {
          return <Recipe key={recipe["id"]} recipe={recipe}></Recipe>;
        })}
      </div>
    </div>
  );
}
