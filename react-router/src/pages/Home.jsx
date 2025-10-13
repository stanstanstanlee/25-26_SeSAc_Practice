import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>홈 페이지</h1>

      {/* Link 컴포넌트 사용 */}
      <div style={{ margin: "20px 0" }}>
        <h3>Link 컴포넌트로 이동:</h3>
        <Link to="/dummy/products">상품 목록</Link> <br />
        <Link to="/dummy/carts">장바구니</Link>
        <br />
        <Link to="/dummy/posts">게시글</Link>
      </div>

      {/* useNavigate 훅 사용 */}
      <div style={{ margin: "20px 0" }}>
        <h3>useNavigate 훅으로 이동:</h3>
        <button onClick={() => navigate("/dummy/products")}>상품 목록</button>
        <br />
        <button onClick={() => navigate("/dummy/carts")}>장바구니</button>
        <br />
        <button onClick={() => navigate("/dummy/posts")}>게시글</button>
      </div>
    </div>
  );
}
