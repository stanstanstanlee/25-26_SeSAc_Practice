import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/RootPages/Home";
import Products from "../pages/DummyPages/Products";
import Carts from "../pages/DummyPages/Carts";
import Posts from "../pages/DummyPages/Posts";
import RootLayout from "../layouts/RootLayout";
import DummyLayout from "../layouts/DummyLayout";
import PostDetail from "../pages/DummyPages/PostDetail";
import ProductDetail from "../pages/DummyPages/ProductDetail";
import PATHS from "../constants/paths"; //경로 상수

const router = createBrowserRouter([
  {
    path: PATHS["ROOT"]["INDEX"],
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
      {
        path: "posts/:postId",
        Component: PostDetail,
      },
      {
        path: "products/:productId",
        Component: ProductDetail,
      },
    ],
  },
]);

export default router;
