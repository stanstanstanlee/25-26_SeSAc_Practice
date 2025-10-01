import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ProductContainer from "./components/ProductCard/ProductContainer";
import StringState from "./components/State/StringState";
import NumberState from "./components/State/NumberState";
import ObjectState from "./components/State/ObjectState";
import Form from "./components/Signup/Form";
import RecipeContainer from "./components/Recipe/RecipeContainer";
ProductContainer;
export default function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Main /> */}
      {/* <Footer /> */}
      {/* <StringState /> */}
      {/* <NumberState /> */}
      {/* <ObjectState /> */}
      {/* <Form /> */}
      <RecipeContainer />
    </div>
  );
}
