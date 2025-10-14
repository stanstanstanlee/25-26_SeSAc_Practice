import Products from "../../pages/DummyPages/Products";
import Carts from "../../pages/DummyPages/Carts";
import Posts from "../../pages/DummyPages/Posts";
import DummyLayout from "../../layouts/DummyLayout";
import PostDetail from "../../pages/DummyPages/PostDetail";
import PATHS from "../../constants/paths";
import DummyLayout from "../../layouts/DummyLayout";
import ProductDetail from "../../pages/DummyPages/ProductDetail";

const dummyRoutes = [
  {
    paths: PATHS.DUMMY.INDEX,
    Component: DummyLayout,
    children: [
      {
        path: PATHS.DUMMY.CARTS,
        Component: Carts,
      },
      {
        path: PATHS.DUMMY.POSTS,
        Component: Posts,
      },
      {
        path: PATHS.DUMMY.POST_DETAIL,
        Component: PostDetail,
      },
      {
        path: PATHS.DUMMY.PRODUCTS,
        Component: Products,
      },
      {
        path: PATHS.DUMMY.PRODUCT_DETAIL,
        Component: ProductDetail,
      },
    ],
  },
];

export default dummyRoutes;
