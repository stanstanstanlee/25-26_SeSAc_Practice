// 경로 문자열을 관리 상수 각체
const PATHS = {
  // Root Layout의 중첩된 경로
  ROOT: {
    // Root Layout의 기본(진입) 경로
    INDEX: "/",
  },

  DUMMY: {
    INDEX: "/dummy",
    CARTS: "/dummy/carts",
    POSTS: "/dummy/posts",
    POST_DETAIL: "/dummy/posts/:postId",
    getPostDetail: (postId) => `/dummy/posts/${postId}`,
    PRODUCTS: "/dummy/products",
    PRODUCT_DETAIL: "/dummy/products/:productId",
    getProductDetail: (productId) => `/dummy/products/${productId}`,
  },
};

export default PATHS;
