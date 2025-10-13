import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/RootPages/Home";
import Products from "../pages/DummyPages/Products";
import Carts from "../pages/DummyPages/Carts";
import Posts from "../pages/DummyPages/Posts";
import RootLayout from "../layouts/RootLayout";
import DummyLayout from "../layouts/DummyLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/dummy",
    Component: DummyLayout,
    children: [
      {
        path: "carts",
        Component: Carts,
      },
      {
        path: "posts",
        Component: Posts,
      },
      {
        path: "products",
        Component: Products,
      },
    ],
  },
]);

export default router;
