// 경로 문자열을 관리 상수 각체
const PATHS = {
  // Root Layout의 중첩된 경로
  ROOT: {
    // Root Layout의 기본(진입) 경로
    INDEX: "/",
  },

  DUMMY: {
    INDEX: "/dummy",
    CARTS: "/carts",
    POSTS: "/posts",
    POST_DETAIL: "/posts/:postId",
    getPostDetail: (postId) => `/posts/${postId}`,
    PRODUCTS: "/products",
    PRODUCT_DETAIL: "/products/:productId",
    getProductDetail: (productId) => `/products/${productId}`,
  },
};

export default PATHS;
